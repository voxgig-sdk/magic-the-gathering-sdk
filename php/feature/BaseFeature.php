<?php
declare(strict_types=1);

// MagicTheGathering SDK base feature

class MagicTheGatheringBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MagicTheGatheringContext $ctx, array $options): void {}
    public function PostConstruct(MagicTheGatheringContext $ctx): void {}
    public function PostConstructEntity(MagicTheGatheringContext $ctx): void {}
    public function SetData(MagicTheGatheringContext $ctx): void {}
    public function GetData(MagicTheGatheringContext $ctx): void {}
    public function GetMatch(MagicTheGatheringContext $ctx): void {}
    public function SetMatch(MagicTheGatheringContext $ctx): void {}
    public function PrePoint(MagicTheGatheringContext $ctx): void {}
    public function PreSpec(MagicTheGatheringContext $ctx): void {}
    public function PreRequest(MagicTheGatheringContext $ctx): void {}
    public function PreResponse(MagicTheGatheringContext $ctx): void {}
    public function PreResult(MagicTheGatheringContext $ctx): void {}
    public function PreDone(MagicTheGatheringContext $ctx): void {}
    public function PreUnexpected(MagicTheGatheringContext $ctx): void {}
}
