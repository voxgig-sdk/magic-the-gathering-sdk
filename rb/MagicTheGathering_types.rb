# frozen_string_literal: true

# Typed models for the MagicTheGathering SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Card entity data model.
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] card
#   @return [Hash, nil]
#
# @!attribute [rw] cmc
#   @return [Float, nil]
#
# @!attribute [rw] color
#   @return [Array, nil]
#
# @!attribute [rw] color_identity
#   @return [Array, nil]
#
# @!attribute [rw] flavor
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] legality
#   @return [Array, nil]
#
# @!attribute [rw] loyalty
#   @return [String, nil]
#
# @!attribute [rw] mana_cost
#   @return [String, nil]
#
# @!attribute [rw] multiverseid
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] original_text
#   @return [String, nil]
#
# @!attribute [rw] original_type
#   @return [String, nil]
#
# @!attribute [rw] power
#   @return [String, nil]
#
# @!attribute [rw] printing
#   @return [Array, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] ruling
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [String, nil]
#
# @!attribute [rw] set_name
#   @return [String, nil]
#
# @!attribute [rw] subtype
#   @return [Array, nil]
#
# @!attribute [rw] supertype
#   @return [Array, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] toughness
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Card = Struct.new(
  :artist,
  :card,
  :cmc,
  :color,
  :color_identity,
  :flavor,
  :id,
  :image_url,
  :legality,
  :loyalty,
  :mana_cost,
  :multiverseid,
  :name,
  :number,
  :original_text,
  :original_type,
  :power,
  :printing,
  :rarity,
  :ruling,
  :set,
  :set_name,
  :subtype,
  :supertype,
  :text,
  :toughness,
  :type,
  keyword_init: true
)

# Request payload for Card#load.
#
# @!attribute [rw] id
#   @return [String]
CardLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Card#list (any subset of Card fields).
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] card
#   @return [Hash, nil]
#
# @!attribute [rw] cmc
#   @return [Float, nil]
#
# @!attribute [rw] color
#   @return [Array, nil]
#
# @!attribute [rw] color_identity
#   @return [Array, nil]
#
# @!attribute [rw] flavor
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] legality
#   @return [Array, nil]
#
# @!attribute [rw] loyalty
#   @return [String, nil]
#
# @!attribute [rw] mana_cost
#   @return [String, nil]
#
# @!attribute [rw] multiverseid
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] original_text
#   @return [String, nil]
#
# @!attribute [rw] original_type
#   @return [String, nil]
#
# @!attribute [rw] power
#   @return [String, nil]
#
# @!attribute [rw] printing
#   @return [Array, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] ruling
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [String, nil]
#
# @!attribute [rw] set_name
#   @return [String, nil]
#
# @!attribute [rw] subtype
#   @return [Array, nil]
#
# @!attribute [rw] supertype
#   @return [Array, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] toughness
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
CardListMatch = Struct.new(
  :artist,
  :card,
  :cmc,
  :color,
  :color_identity,
  :flavor,
  :id,
  :image_url,
  :legality,
  :loyalty,
  :mana_cost,
  :multiverseid,
  :name,
  :number,
  :original_text,
  :original_type,
  :power,
  :printing,
  :rarity,
  :ruling,
  :set,
  :set_name,
  :subtype,
  :supertype,
  :text,
  :toughness,
  :type,
  keyword_init: true
)

# Set entity data model.
#
# @!attribute [rw] block
#   @return [String, nil]
#
# @!attribute [rw] booster
#   @return [Array, nil]
#
# @!attribute [rw] border
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] online_only
#   @return [Boolean, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Set = Struct.new(
  :block,
  :booster,
  :border,
  :code,
  :name,
  :online_only,
  :release_date,
  :type,
  keyword_init: true
)

# Match filter for Set#list (any subset of Set fields).
#
# @!attribute [rw] block
#   @return [String, nil]
#
# @!attribute [rw] booster
#   @return [Array, nil]
#
# @!attribute [rw] border
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] online_only
#   @return [Boolean, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SetListMatch = Struct.new(
  :block,
  :booster,
  :border,
  :code,
  :name,
  :online_only,
  :release_date,
  :type,
  keyword_init: true
)

