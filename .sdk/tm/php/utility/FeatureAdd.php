<?php
declare(strict_types=1);

// ParkingStgallen SDK utility: feature_add

class ParkingStgallenFeatureAdd
{
    public static function call(ParkingStgallenContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
