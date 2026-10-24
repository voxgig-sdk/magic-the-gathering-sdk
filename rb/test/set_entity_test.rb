# Set entity test

require "minitest/autorun"
require "json"
require_relative "../MagicTheGathering_sdk"
require_relative "runner"

class SetEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = MagicTheGatheringSDK.test(nil, nil)
    ent = testsdk.Set(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "set" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = MagicTheGatheringSDK.test(seed, nil).Set(nil).list(nil, nil)
    # list resolves to one entity per record; data_get reads the record.
    assert_equal 2, items.length
    items.each do |item|
      assert item.respond_to?(:data_get)
      assert item.data_get.is_a?(Hash)
    end
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "set" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = MagicTheGatheringSDK.test(seed, nil)
    seen = base.Set(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = MagicTheGatheringConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = MagicTheGatheringSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Set(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  class FailHook < MagicTheGatheringBaseFeature
    attr_reader :unexpected

    def initialize
      super()
      @name = "failhook"
      @unexpected = 0
    end

    def PreSpec(ctx)
      raise "set hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      MagicTheGatheringSDK.test(offline, nil).Set(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    MagicTheGatheringSDK.test(offline, nil).Set(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = MagicTheGatheringConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = MagicTheGatheringSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.Set(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    MagicTheGatheringSDK.test(nil, nil).Set(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = MagicTheGatheringSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.Set(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.Set(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate_list_response
    cfg = MagicTheGatheringConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    opts = { "feature" => { "validate" => { "active" => true, "request" => false, "response" => true } } }
    listed = MagicTheGatheringSDK.test({ "entity" => { "set" => { "v1" => {  } } } }, opts).Set(nil).list(nil, nil)
    assert_equal ["v1"], listed.map { |ent| ent.data_get["id"] }
    err = assert_raises(StandardError) do
      MagicTheGatheringSDK.test({ "entity" => { "set" => { "v1" => { "block" => 1 } } } }, opts).Set(nil).list(nil, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_validate
    cfg = MagicTheGatheringConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = MagicTheGatheringSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.Set(nil).list({ "block" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = set_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "set." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    set_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.set")))
    set_ref01_data = nil
    if set_ref01_data_raw.length > 0
      set_ref01_data = Helpers.to_map(set_ref01_data_raw[0][1])
    end

    # LIST
    set_ref01_ent = client.Set(nil)
    set_ref01_match = {}

    set_ref01_list_result = set_ref01_ent.list(set_ref01_match, nil)
    assert set_ref01_list_result.is_a?(Array)

  end
end

def set_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "set", "SetTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MagicTheGatheringSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["set01", "set02", "set03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["MAGIC_THE_GATHERING_TEST_SET_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAGIC_THE_GATHERING_TEST_SET_ENTID" => idmap,
    "MAGIC_THE_GATHERING_TEST_LIVE" => "FALSE",
    "MAGIC_THE_GATHERING_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["MAGIC_THE_GATHERING_TEST_SET_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["MAGIC_THE_GATHERING_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
      },
      extra || {},
    ])
    client = MagicTheGatheringSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MAGIC_THE_GATHERING_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MAGIC_THE_GATHERING_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
