// Typed models for the MagicTheGathering SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Card {
  artist?: string
  cmc?: number
  colorIdentity?: any[]
  colors?: any[]
  flavor?: string
  id?: string
  imageUrl?: string
  legalities?: any[]
  loyalty?: string
  manaCost?: string
  multiverseid?: string
  name?: string
  number?: string
  originalText?: string
  originalType?: string
  power?: string
  printings?: any[]
  rarity?: string
  rulings?: any[]
  set?: string
  setName?: string
  subtypes?: any[]
  supertypes?: any[]
  text?: string
  toughness?: string
  type?: string
  types?: any[]
}

export interface CardLoadMatch {
  id: string
}

export interface CardListMatch {
  cmc?: number
  color?: string
  name?: string
  page?: number
  page_size?: number
  rarity?: string
  set?: string
  type?: string
}

export interface SetType {
  block?: string
  booster?: any[]
  border?: string
  code?: string
  name?: string
  onlineOnly?: boolean
  releaseDate?: string
  type?: string
}

export interface SetListMatch {
  block?: string
  name?: string
}

