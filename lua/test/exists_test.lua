-- MagicTheGathering SDK exists test

local sdk = require("magic-the-gathering_sdk")

describe("MagicTheGatheringSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
