<?php
declare(strict_types=1);

// MagicTheGathering SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MagicTheGatheringMakeContext
{
    public static function call(array $ctxmap, ?MagicTheGatheringContext $basectx): MagicTheGatheringContext
    {
        return new MagicTheGatheringContext($ctxmap, $basectx);
    }
}
