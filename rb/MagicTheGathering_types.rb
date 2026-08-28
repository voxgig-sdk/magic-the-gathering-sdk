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
# @!attribute [rw] cmc
#   @return [Float, nil]
#
# @!attribute [rw] colorIdentity
#   @return [Array, nil]
#
# @!attribute [rw] colors
#   @return [Array, nil]
#
# @!attribute [rw] flavor
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] legalities
#   @return [Array, nil]
#
# @!attribute [rw] loyalty
#   @return [String, nil]
#
# @!attribute [rw] manaCost
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
# @!attribute [rw] originalText
#   @return [String, nil]
#
# @!attribute [rw] originalType
#   @return [String, nil]
#
# @!attribute [rw] power
#   @return [String, nil]
#
# @!attribute [rw] printings
#   @return [Array, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] rulings
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [String, nil]
#
# @!attribute [rw] setName
#   @return [String, nil]
#
# @!attribute [rw] subtypes
#   @return [Array, nil]
#
# @!attribute [rw] supertypes
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
#
# @!attribute [rw] types
#   @return [Array, nil]
Card = Struct.new(
  :artist,
  :cmc,
  :colorIdentity,
  :colors,
  :flavor,
  :id,
  :imageUrl,
  :legalities,
  :loyalty,
  :manaCost,
  :multiverseid,
  :name,
  :number,
  :originalText,
  :originalType,
  :power,
  :printings,
  :rarity,
  :rulings,
  :set,
  :setName,
  :subtypes,
  :supertypes,
  :text,
  :toughness,
  :type,
  :types,
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

# Request payload for Card#list.
#
# @!attribute [rw] cmc
#   @return [Integer, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] set
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
CardListMatch = Struct.new(
  :cmc,
  :color,
  :name,
  :page,
  :page_size,
  :rarity,
  :set,
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
# @!attribute [rw] onlineOnly
#   @return [Boolean, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SetType = Struct.new(
  :block,
  :booster,
  :border,
  :code,
  :name,
  :onlineOnly,
  :releaseDate,
  :type,
  keyword_init: true
)

# Request payload for Set#list.
#
# @!attribute [rw] block
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
SetListMatch = Struct.new(
  :block,
  :name,
  keyword_init: true
)

