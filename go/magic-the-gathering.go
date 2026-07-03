package voxgigmagicthegatheringsdk

import (
	"github.com/voxgig-sdk/magic-the-gathering-sdk/go/core"
	"github.com/voxgig-sdk/magic-the-gathering-sdk/go/entity"
	"github.com/voxgig-sdk/magic-the-gathering-sdk/go/feature"
	_ "github.com/voxgig-sdk/magic-the-gathering-sdk/go/utility"
)

// Type aliases preserve external API.
type MagicTheGatheringSDK = core.MagicTheGatheringSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MagicTheGatheringEntity = core.MagicTheGatheringEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MagicTheGatheringError = core.MagicTheGatheringError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCardEntityFunc = func(client *core.MagicTheGatheringSDK, entopts map[string]any) core.MagicTheGatheringEntity {
		return entity.NewCardEntity(client, entopts)
	}
	core.NewSetEntityFunc = func(client *core.MagicTheGatheringSDK, entopts map[string]any) core.MagicTheGatheringEntity {
		return entity.NewSetEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMagicTheGatheringSDK = core.NewMagicTheGatheringSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMagicTheGatheringSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MagicTheGatheringSDK  { return NewMagicTheGatheringSDK(nil) }
func Test() *MagicTheGatheringSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
