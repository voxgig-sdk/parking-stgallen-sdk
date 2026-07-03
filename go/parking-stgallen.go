package voxgigparkingstgallensdk

import (
	"github.com/voxgig-sdk/parking-stgallen-sdk/go/core"
	"github.com/voxgig-sdk/parking-stgallen-sdk/go/entity"
	"github.com/voxgig-sdk/parking-stgallen-sdk/go/feature"
	_ "github.com/voxgig-sdk/parking-stgallen-sdk/go/utility"
)

// Type aliases preserve external API.
type ParkingStgallenSDK = core.ParkingStgallenSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ParkingStgallenEntity = core.ParkingStgallenEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ParkingStgallenError = core.ParkingStgallenError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewParkingRecordEntityFunc = func(client *core.ParkingStgallenSDK, entopts map[string]any) core.ParkingStgallenEntity {
		return entity.NewParkingRecordEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewParkingStgallenSDK = core.NewParkingStgallenSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewParkingStgallenSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ParkingStgallenSDK  { return NewParkingStgallenSDK(nil) }
func Test() *ParkingStgallenSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
