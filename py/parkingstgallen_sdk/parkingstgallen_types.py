# Typed models for the ParkingStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ParkingRecord(TypedDict, total=False):
    datasetid: str
    fields: dict
    geometry: dict
    record_timestamp: str
    recordid: str


class ParkingRecordLoadMatchRequired(TypedDict):
    dataset: str


class ParkingRecordLoadMatch(ParkingRecordLoadMatchRequired, total=False):
    format: str
    timezone: str


class ParkingRecordListMatchRequired(TypedDict):
    dataset: str


class ParkingRecordListMatch(ParkingRecordListMatchRequired, total=False):
    exclude_phid: str
    exclude_phname: str
    facet: list
    format: str
    lang: str
    q: str
    refine_phid: str
    refine_phname: str
    row: int
    sort: str
    start: int
    timezone: str
