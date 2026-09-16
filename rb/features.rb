# MagicTheGathering SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MagicTheGatheringFeatures
  def self.make_feature(name)
    case name
    when "base"
      MagicTheGatheringBaseFeature.new
    when "ratelimit"
      MagicTheGatheringRatelimitFeature.new
    when "retry"
      MagicTheGatheringRetryFeature.new
    when "test"
      MagicTheGatheringTestFeature.new
    when "timeout"
      MagicTheGatheringTimeoutFeature.new
    else
      MagicTheGatheringBaseFeature.new
    end
  end
end
