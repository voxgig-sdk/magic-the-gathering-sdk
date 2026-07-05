// Typed models for the MagicTheGathering SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Card is the typed data model for the card entity.
type Card struct {
	Artist *string `json:"artist,omitempty"`
	Card *map[string]any `json:"card,omitempty"`
	Cmc *float64 `json:"cmc,omitempty"`
	Color *[]any `json:"color,omitempty"`
	ColorIdentity *[]any `json:"color_identity,omitempty"`
	Flavor *string `json:"flavor,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Legality *[]any `json:"legality,omitempty"`
	Loyalty *string `json:"loyalty,omitempty"`
	ManaCost *string `json:"mana_cost,omitempty"`
	Multiverseid *string `json:"multiverseid,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	OriginalText *string `json:"original_text,omitempty"`
	OriginalType *string `json:"original_type,omitempty"`
	Power *string `json:"power,omitempty"`
	Printing *[]any `json:"printing,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Ruling *[]any `json:"ruling,omitempty"`
	Set *string `json:"set,omitempty"`
	SetName *string `json:"set_name,omitempty"`
	Subtype *[]any `json:"subtype,omitempty"`
	Supertype *[]any `json:"supertype,omitempty"`
	Text *string `json:"text,omitempty"`
	Toughness *string `json:"toughness,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CardLoadMatch is the typed request payload for Card.LoadTyped.
type CardLoadMatch struct {
	Id string `json:"id"`
}

// CardListMatch is the typed request payload for Card.ListTyped.
type CardListMatch struct {
	Artist *string `json:"artist,omitempty"`
	Card *map[string]any `json:"card,omitempty"`
	Cmc *float64 `json:"cmc,omitempty"`
	Color *[]any `json:"color,omitempty"`
	ColorIdentity *[]any `json:"color_identity,omitempty"`
	Flavor *string `json:"flavor,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Legality *[]any `json:"legality,omitempty"`
	Loyalty *string `json:"loyalty,omitempty"`
	ManaCost *string `json:"mana_cost,omitempty"`
	Multiverseid *string `json:"multiverseid,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	OriginalText *string `json:"original_text,omitempty"`
	OriginalType *string `json:"original_type,omitempty"`
	Power *string `json:"power,omitempty"`
	Printing *[]any `json:"printing,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Ruling *[]any `json:"ruling,omitempty"`
	Set *string `json:"set,omitempty"`
	SetName *string `json:"set_name,omitempty"`
	Subtype *[]any `json:"subtype,omitempty"`
	Supertype *[]any `json:"supertype,omitempty"`
	Text *string `json:"text,omitempty"`
	Toughness *string `json:"toughness,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Set is the typed data model for the set entity.
type Set struct {
	Block *string `json:"block,omitempty"`
	Booster *[]any `json:"booster,omitempty"`
	Border *string `json:"border,omitempty"`
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	OnlineOnly *bool `json:"online_only,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SetListMatch is the typed request payload for Set.ListTyped.
type SetListMatch struct {
	Block *string `json:"block,omitempty"`
	Booster *[]any `json:"booster,omitempty"`
	Border *string `json:"border,omitempty"`
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	OnlineOnly *bool `json:"online_only,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
