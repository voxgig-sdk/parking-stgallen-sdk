<?php
declare(strict_types=1);

// ParkingStgallen SDK base feature

class ParkingStgallenBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ParkingStgallenContext $ctx, array $options): void {}
    public function PostConstruct(ParkingStgallenContext $ctx): void {}
    public function PostConstructEntity(ParkingStgallenContext $ctx): void {}
    public function SetData(ParkingStgallenContext $ctx): void {}
    public function GetData(ParkingStgallenContext $ctx): void {}
    public function GetMatch(ParkingStgallenContext $ctx): void {}
    public function SetMatch(ParkingStgallenContext $ctx): void {}
    public function PrePoint(ParkingStgallenContext $ctx): void {}
    public function PreSpec(ParkingStgallenContext $ctx): void {}
    public function PreRequest(ParkingStgallenContext $ctx): void {}
    public function PreResponse(ParkingStgallenContext $ctx): void {}
    public function PreResult(ParkingStgallenContext $ctx): void {}
    public function PreDone(ParkingStgallenContext $ctx): void {}
    public function PreUnexpected(ParkingStgallenContext $ctx): void {}
}
