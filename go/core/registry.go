package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCardEntityFunc func(client *MagicTheGatheringSDK, entopts map[string]any) MagicTheGatheringEntity

var NewSetEntityFunc func(client *MagicTheGatheringSDK, entopts map[string]any) MagicTheGatheringEntity

