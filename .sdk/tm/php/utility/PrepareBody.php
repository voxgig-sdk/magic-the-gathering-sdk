<?php
declare(strict_types=1);

// MagicTheGathering SDK utility: prepare_body

class MagicTheGatheringPrepareBody
{
    public static function call(MagicTheGatheringContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
