# Typed models for the MagicTheGathering SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Card(TypedDict, total=False):
    artist: str
    cmc: float
    colorIdentity: list
    colors: list
    flavor: str
    id: str
    imageUrl: str
    legalities: list
    loyalty: str
    manaCost: str
    multiverseid: str
    name: str
    number: str
    originalText: str
    originalType: str
    power: str
    printings: list
    rarity: str
    rulings: list
    set: str
    setName: str
    subtypes: list
    supertypes: list
    text: str
    toughness: str
    type: str
    types: list


class CardLoadMatch(TypedDict):
    id: str


class CardListMatch(TypedDict, total=False):
    artist: str
    cmc: float
    colorIdentity: list
    colors: list
    flavor: str
    id: str
    imageUrl: str
    legalities: list
    loyalty: str
    manaCost: str
    multiverseid: str
    name: str
    number: str
    originalText: str
    originalType: str
    power: str
    printings: list
    rarity: str
    rulings: list
    set: str
    setName: str
    subtypes: list
    supertypes: list
    text: str
    toughness: str
    type: str
    types: list


class Set(TypedDict, total=False):
    block: str
    booster: list
    border: str
    code: str
    name: str
    onlineOnly: bool
    releaseDate: str
    type: str


class SetListMatch(TypedDict, total=False):
    block: str
    booster: list
    border: str
    code: str
    name: str
    onlineOnly: bool
    releaseDate: str
    type: str
