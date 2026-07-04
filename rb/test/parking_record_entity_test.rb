# ParkingRecord entity test

require "minitest/autorun"
require "json"
require_relative "../ParkingStgallen_sdk"
require_relative "runner"

class ParkingRecordEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ParkingStgallenSDK.test(nil, nil)
    ent = testsdk.ParkingRecord(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = parking_record_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "parking_record." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    parking_record_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.parking_record")))
    parking_record_ref01_data = nil
    if parking_record_ref01_data_raw.length > 0
      parking_record_ref01_data = Helpers.to_map(parking_record_ref01_data_raw[0][1])
    end

    # LIST
    parking_record_ref01_ent = client.ParkingRecord(nil)
    parking_record_ref01_match = {}

    parking_record_ref01_list_result = parking_record_ref01_ent.list(parking_record_ref01_match, nil)
    assert parking_record_ref01_list_result.is_a?(Array)

    # LOAD
    parking_record_ref01_match_dt0 = {}
    parking_record_ref01_data_dt0_loaded = parking_record_ref01_ent.load(parking_record_ref01_match_dt0, nil)
    assert !parking_record_ref01_data_dt0_loaded.nil?

  end
end

def parking_record_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "parking_record", "ParkingRecordTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ParkingStgallenSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["parking_record01", "parking_record02", "parking_record03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID" => idmap,
    "PARKINGSTGALLEN_TEST_LIVE" => "FALSE",
    "PARKINGSTGALLEN_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["PARKINGSTGALLEN_TEST_PARKING_RECORD_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["PARKINGSTGALLEN_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = ParkingStgallenSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["PARKINGSTGALLEN_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["PARKINGSTGALLEN_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
