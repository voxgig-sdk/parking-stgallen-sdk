package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewParkingRecordEntityFunc func(client *ParkingStgallenSDK, entopts map[string]any) ParkingStgallenEntity

