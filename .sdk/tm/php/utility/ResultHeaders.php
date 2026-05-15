<?php
declare(strict_types=1);

// MagicTheGathering SDK utility: result_headers

class MagicTheGatheringResultHeaders
{
    public static function call(MagicTheGatheringContext $ctx): ?MagicTheGatheringResult
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
