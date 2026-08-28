-- Typed models for the ParkingStgallen SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ParkingRecord
---@field datasetid? string
---@field fields? table
---@field geometry? table
---@field record_timestamp? string
---@field recordid? string

---@class ParkingRecordLoadMatch
---@field dataset string
---@field format? string
---@field timezone? string

---@class ParkingRecordListMatch
---@field dataset string
---@field exclude_phid? string
---@field exclude_phname? string
---@field facet? table
---@field format? string
---@field lang? string
---@field q? string
---@field refine_phid? string
---@field refine_phname? string
---@field row? number
---@field sort? string
---@field start? number
---@field timezone? string

local M = {}

return M
