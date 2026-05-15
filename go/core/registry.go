package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCardEntityFunc func(client *MagicTheGatheringSDK, entopts map[string]any) MagicTheGatheringEntity

var NewSetEntityFunc func(client *MagicTheGatheringSDK, entopts map[string]any) MagicTheGatheringEntity

