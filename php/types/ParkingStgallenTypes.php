<?php
declare(strict_types=1);

// Typed models for the ParkingStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ParkingRecord entity data model. */
class ParkingRecord
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Request payload for ParkingRecord#load. */
class ParkingRecordLoadMatch
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

/** Request payload for ParkingRecord#list. */
class ParkingRecordListMatch
{
    public ?string $datasetid = null;
    public ?array $field = null;
    public ?array $geometry = null;
    public ?string $record_timestamp = null;
    public ?string $recordid = null;
}

