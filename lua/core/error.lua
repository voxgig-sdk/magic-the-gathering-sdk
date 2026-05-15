-- MagicTheGathering SDK error

local MagicTheGatheringError = {}
MagicTheGatheringError.__index = MagicTheGatheringError


function MagicTheGatheringError.new(code, msg, ctx)
  local self = setmetatable({}, MagicTheGatheringError)
  self.is_sdk_error = true
  self.sdk = "MagicTheGathering"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MagicTheGatheringError:error()
  return self.msg
end


function MagicTheGatheringError:__tostring()
  return self.msg
end


return MagicTheGatheringError
