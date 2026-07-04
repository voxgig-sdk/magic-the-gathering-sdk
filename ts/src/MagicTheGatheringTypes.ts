// Typed models for the MagicTheGathering SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Card {
  artist?: string
  card?: Record<string, any>
  cmc?: number
  color?: any[]
  color_identity?: any[]
  flavor?: string
  id?: string
  image_url?: string
  legality?: any[]
  loyalty?: string
  mana_cost?: string
  multiverseid?: string
  name?: string
  number?: string
  original_text?: string
  original_type?: string
  power?: string
  printing?: any[]
  rarity?: string
  ruling?: any[]
  set?: string
  set_name?: string
  subtype?: any[]
  supertype?: any[]
  text?: string
  toughness?: string
  type?: string
}

export interface CardLoadMatch {
  id: string
}

export type CardListMatch = Partial<Card>

export interface Set {
  block?: string
  booster?: any[]
  border?: string
  code?: string
  name?: string
  online_only?: boolean
  release_date?: string
  type?: string
}

export type SetListMatch = Partial<Set>

