package = "voxgig-sdk-magic-the-gathering"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/magic-the-gathering-sdk.git"
}
description = {
  summary = "MagicTheGathering SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["magic-the-gathering_sdk"] = "magic-the-gathering_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
