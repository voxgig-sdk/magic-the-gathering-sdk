<?php
declare(strict_types=1);

// MagicTheGathering SDK utility: result_body

class MagicTheGatheringResultBody
{
    public static function call(MagicTheGatheringContext $ctx): ?MagicTheGatheringResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
