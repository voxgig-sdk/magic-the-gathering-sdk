# MagicTheGathering SDK utility: make_context
require_relative '../core/context'
module MagicTheGatheringUtilities
  MakeContext = ->(ctxmap, basectx) {
    MagicTheGatheringContext.new(ctxmap, basectx)
  }
end
