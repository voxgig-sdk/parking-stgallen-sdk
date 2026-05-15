<?php
declare(strict_types=1);

// ParkingStgallen SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ParkingStgallenMakeContext
{
    public static function call(array $ctxmap, ?ParkingStgallenContext $basectx): ParkingStgallenContext
    {
        return new ParkingStgallenContext($ctxmap, $basectx);
    }
}
