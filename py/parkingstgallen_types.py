# Typed models for the ParkingStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class ParkingRecord:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None


@dataclass
class ParkingRecordLoadMatch:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None


@dataclass
class ParkingRecordListMatch:
    datasetid: Optional[str] = None
    field: Optional[dict] = None
    geometry: Optional[dict] = None
    record_timestamp: Optional[str] = None
    recordid: Optional[str] = None

