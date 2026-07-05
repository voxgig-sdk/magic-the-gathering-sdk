<?php
declare(strict_types=1);

// Typed models for the MagicTheGathering SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Card entity data model. */
class Card
{
    public ?string $artist = null;
    public ?array $card = null;
    public ?float $cmc = null;
    public ?array $color = null;
    public ?array $color_identity = null;
    public ?string $flavor = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?array $legality = null;
    public ?string $loyalty = null;
    public ?string $mana_cost = null;
    public ?string $multiverseid = null;
    public ?string $name = null;
    public ?string $number = null;
    public ?string $original_text = null;
    public ?string $original_type = null;
    public ?string $power = null;
    public ?array $printing = null;
    public ?string $rarity = null;
    public ?array $ruling = null;
    public ?string $set = null;
    public ?string $set_name = null;
    public ?array $subtype = null;
    public ?array $supertype = null;
    public ?string $text = null;
    public ?string $toughness = null;
    public ?string $type = null;
}

/** Request payload for Card#load. */
class CardLoadMatch
{
    public string $id;
}

/** Request payload for Card#list. */
class CardListMatch
{
    public ?string $artist = null;
    public ?array $card = null;
    public ?float $cmc = null;
    public ?array $color = null;
    public ?array $color_identity = null;
    public ?string $flavor = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?array $legality = null;
    public ?string $loyalty = null;
    public ?string $mana_cost = null;
    public ?string $multiverseid = null;
    public ?string $name = null;
    public ?string $number = null;
    public ?string $original_text = null;
    public ?string $original_type = null;
    public ?string $power = null;
    public ?array $printing = null;
    public ?string $rarity = null;
    public ?array $ruling = null;
    public ?string $set = null;
    public ?string $set_name = null;
    public ?array $subtype = null;
    public ?array $supertype = null;
    public ?string $text = null;
    public ?string $toughness = null;
    public ?string $type = null;
}

/** Set entity data model. */
class Set
{
    public ?string $block = null;
    public ?array $booster = null;
    public ?string $border = null;
    public ?string $code = null;
    public ?string $name = null;
    public ?bool $online_only = null;
    public ?string $release_date = null;
    public ?string $type = null;
}

/** Request payload for Set#list. */
class SetListMatch
{
    public ?string $block = null;
    public ?array $booster = null;
    public ?string $border = null;
    public ?string $code = null;
    public ?string $name = null;
    public ?bool $online_only = null;
    public ?string $release_date = null;
    public ?string $type = null;
}

