package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/parking-stgallen-sdk"
	"github.com/voxgig-sdk/parking-stgallen-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestParkingRecordEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ParkingRecord(nil)
		if ent == nil {
			t.Fatal("expected non-nil ParkingRecordEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := parking_recordBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "parking_record." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		parkingRecordRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.parking_record", setup.data)))
		var parkingRecordRef01Data map[string]any
		if len(parkingRecordRef01DataRaw) > 0 {
			parkingRecordRef01Data = core.ToMapAny(parkingRecordRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = parkingRecordRef01Data

		// LIST
		parkingRecordRef01Ent := client.ParkingRecord(nil)
		parkingRecordRef01Match := map[string]any{}

		parkingRecordRef01ListResult, err := parkingRecordRef01Ent.List(parkingRecordRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, parkingRecordRef01ListOk := parkingRecordRef01ListResult.([]any)
		if !parkingRecordRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", parkingRecordRef01ListResult)
		}

		// LOAD
		parkingRecordRef01MatchDt0 := map[string]any{}
		parkingRecordRef01DataDt0Loaded, err := parkingRecordRef01Ent.Load(parkingRecordRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if parkingRecordRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func parking_recordBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "parking_record", "ParkingRecordTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read parking_record test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse parking_record test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"parking_record01", "parking_record02", "parking_record03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID": idmap,
		"PARKINGSTGALLEN_TEST_LIVE":      "FALSE",
		"PARKINGSTGALLEN_TEST_EXPLAIN":   "FALSE",
		"PARKINGSTGALLEN_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["PARKINGSTGALLEN_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["PARKINGSTGALLEN_APIKEY"],
			},
			extra,
		})
		client = sdk.NewParkingStgallenSDK(core.ToMapAny(mergedOpts))
	}

	live := env["PARKINGSTGALLEN_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["PARKINGSTGALLEN_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
