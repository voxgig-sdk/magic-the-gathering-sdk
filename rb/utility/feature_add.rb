# MagicTheGathering SDK utility: feature_add
module MagicTheGatheringUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
