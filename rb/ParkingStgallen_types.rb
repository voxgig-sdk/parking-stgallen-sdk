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
# @!attribute [rw] fields
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
  :fields,
  :geometry,
  :record_timestamp,
  :recordid,
  keyword_init: true
)

# Request payload for ParkingRecord#load.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
ParkingRecordLoadMatch = Struct.new(
  :dataset,
  :format,
  :timezone,
  keyword_init: true
)

# Request payload for ParkingRecord#list.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] exclude_phid
#   @return [String, nil]
#
# @!attribute [rw] exclude_phname
#   @return [String, nil]
#
# @!attribute [rw] facet
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] refine_phid
#   @return [String, nil]
#
# @!attribute [rw] refine_phname
#   @return [String, nil]
#
# @!attribute [rw] row
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [Integer, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
ParkingRecordListMatch = Struct.new(
  :dataset,
  :exclude_phid,
  :exclude_phname,
  :facet,
  :format,
  :lang,
  :q,
  :refine_phid,
  :refine_phname,
  :row,
  :sort,
  :start,
  :timezone,
  keyword_init: true
)

