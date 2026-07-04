# Typed models for the MagicTheGathering SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Card:
    artist: Optional[str] = None
    card: Optional[dict] = None
    cmc: Optional[float] = None
    color: Optional[list] = None
    color_identity: Optional[list] = None
    flavor: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    legality: Optional[list] = None
    loyalty: Optional[str] = None
    mana_cost: Optional[str] = None
    multiverseid: Optional[str] = None
    name: Optional[str] = None
    number: Optional[str] = None
    original_text: Optional[str] = None
    original_type: Optional[str] = None
    power: Optional[str] = None
    printing: Optional[list] = None
    rarity: Optional[str] = None
    ruling: Optional[list] = None
    set: Optional[str] = None
    set_name: Optional[str] = None
    subtype: Optional[list] = None
    supertype: Optional[list] = None
    text: Optional[str] = None
    toughness: Optional[str] = None
    type: Optional[str] = None


@dataclass
class CardLoadMatch:
    id: str


@dataclass
class CardListMatch:
    artist: Optional[str] = None
    card: Optional[dict] = None
    cmc: Optional[float] = None
    color: Optional[list] = None
    color_identity: Optional[list] = None
    flavor: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    legality: Optional[list] = None
    loyalty: Optional[str] = None
    mana_cost: Optional[str] = None
    multiverseid: Optional[str] = None
    name: Optional[str] = None
    number: Optional[str] = None
    original_text: Optional[str] = None
    original_type: Optional[str] = None
    power: Optional[str] = None
    printing: Optional[list] = None
    rarity: Optional[str] = None
    ruling: Optional[list] = None
    set: Optional[str] = None
    set_name: Optional[str] = None
    subtype: Optional[list] = None
    supertype: Optional[list] = None
    text: Optional[str] = None
    toughness: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Set:
    block: Optional[str] = None
    booster: Optional[list] = None
    border: Optional[str] = None
    code: Optional[str] = None
    name: Optional[str] = None
    online_only: Optional[bool] = None
    release_date: Optional[str] = None
    type: Optional[str] = None


@dataclass
class SetListMatch:
    block: Optional[str] = None
    booster: Optional[list] = None
    border: Optional[str] = None
    code: Optional[str] = None
    name: Optional[str] = None
    online_only: Optional[bool] = None
    release_date: Optional[str] = None
    type: Optional[str] = None

