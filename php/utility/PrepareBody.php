<?php
declare(strict_types=1);

// ParkingStgallen SDK utility: prepare_body

class ParkingStgallenPrepareBody
{
    public static function call(ParkingStgallenContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
