# frozen_string_literal: true

# Typed models for the ParkingStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ParkingRecord entity data model.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
#   @return [Hash, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] record_timestamp
#   @return [String, nil]
#
# @!attribute [rw] recordid
#   @return [String, nil]
ParkingRecord = Struct.new(
  :datasetid,
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for ParkingRecord#load.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
#   @return [Hash, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] record_timestamp
#   @return [String, nil]
#
# @!attribute [rw] recordid
#   @return [String, nil]
ParkingRecordLoadMatch = Struct.new(
  :datasetid,
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for ParkingRecord#list.
#
# @!attribute [rw] datasetid
#   @return [String, nil]
#
# @!attribute [rw] field
#   @return [Hash, nil]
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] record_timestamp
#   @return [String, nil]
#
# @!attribute [rw] recordid
#   @return [String, nil]
ParkingRecordListMatch = Struct.new(
  :datasetid,
  :field,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

