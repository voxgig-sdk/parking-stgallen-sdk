<?php
declare(strict_types=1);

// ParkingStgallen SDK utility: result_headers

class ParkingStgallenResultHeaders
{
    public static function call(ParkingStgallenContext $ctx): ?ParkingStgallenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
