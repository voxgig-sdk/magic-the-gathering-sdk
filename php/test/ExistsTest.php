<?php
declare(strict_types=1);

// MagicTheGathering SDK exists test

require_once __DIR__ . '/../magicthegathering_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MagicTheGatheringSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
