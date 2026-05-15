<?php
declare(strict_types=1);

// ParkingStgallen SDK utility: result_body

class ParkingStgallenResultBody
{
    public static function call(ParkingStgallenContext $ctx): ?ParkingStgallenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
