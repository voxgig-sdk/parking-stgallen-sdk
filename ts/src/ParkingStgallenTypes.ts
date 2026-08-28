// Typed models for the ParkingStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ParkingRecord {
  datasetid?: string
  fields?: Record<string, any>
  geometry?: Record<string, any>
  record_timestamp?: string
  recordid?: string
}

export interface ParkingRecordLoadMatch {
  dataset: string
  format?: string
  timezone?: string
}

export interface ParkingRecordListMatch {
  dataset: string
  exclude_phid?: string
  exclude_phname?: string
  facet?: any[]
  format?: string
  lang?: string
  q?: string
  refine_phid?: string
  refine_phname?: string
  row?: number
  sort?: string
  start?: number
  timezone?: string
}

