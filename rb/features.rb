# MagicTheGathering SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MagicTheGatheringFeatures
  def self.make_feature(name)
    case name
    when "base"
      MagicTheGatheringBaseFeature.new
    when "test"
      MagicTheGatheringTestFeature.new
    else
      MagicTheGatheringBaseFeature.new
    end
  end
end
