# MagicTheGathering SDK exists test

require "minitest/autorun"
require_relative "../MagicTheGathering_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MagicTheGatheringSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
