<?php
declare(strict_types=1);

// MagicTheGathering SDK utility: feature_add

class MagicTheGatheringFeatureAdd
{
    public static function call(MagicTheGatheringContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
