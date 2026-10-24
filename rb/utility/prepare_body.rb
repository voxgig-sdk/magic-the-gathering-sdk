# MagicTheGathering SDK utility: prepare_body
require_relative 'media'
module MagicTheGatheringUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return MagicTheGatheringUtilities.raw_body(ctx.reqdata) if MagicTheGatheringUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
