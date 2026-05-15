<?php
declare(strict_types=1);

// MagicTheGathering SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MagicTheGatheringFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MagicTheGatheringBaseFeature();
            case "test":
                return new MagicTheGatheringTestFeature();
            default:
                return new MagicTheGatheringBaseFeature();
        }
    }
}
