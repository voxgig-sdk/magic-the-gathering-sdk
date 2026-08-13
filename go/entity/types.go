// Typed models for the MagicTheGathering SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/magic-the-gathering-sdk/go/core"
)

// Card is the typed data model for the card entity.
type Card struct {
	Artist *string `json:"artist,omitempty"`
	Cmc *float64 `json:"cmc,omitempty"`
	ColorIdentity *[]any `json:"colorIdentity,omitempty"`
	Colors *[]any `json:"colors,omitempty"`
	Flavor *string `json:"flavor,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Legalities *[]any `json:"legalities,omitempty"`
	Loyalty *string `json:"loyalty,omitempty"`
	ManaCost *string `json:"manaCost,omitempty"`
	Multiverseid *string `json:"multiverseid,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	OriginalText *string `json:"originalText,omitempty"`
	OriginalType *string `json:"originalType,omitempty"`
	Power *string `json:"power,omitempty"`
	Printings *[]any `json:"printings,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Rulings *[]any `json:"rulings,omitempty"`
	Set *string `json:"set,omitempty"`
	SetName *string `json:"setName,omitempty"`
	Subtypes *[]any `json:"subtypes,omitempty"`
	Supertypes *[]any `json:"supertypes,omitempty"`
	Text *string `json:"text,omitempty"`
	Toughness *string `json:"toughness,omitempty"`
	Type *string `json:"type,omitempty"`
	Types *[]any `json:"types,omitempty"`
}

// CardLoadMatch is the typed request payload for Card.LoadTyped.
type CardLoadMatch struct {
	Id string `json:"id"`
}

// CardListMatch is the typed request payload for Card.ListTyped.
type CardListMatch struct {
	Artist *string `json:"artist,omitempty"`
	Cmc *float64 `json:"cmc,omitempty"`
	ColorIdentity *[]any `json:"colorIdentity,omitempty"`
	Colors *[]any `json:"colors,omitempty"`
	Flavor *string `json:"flavor,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Legalities *[]any `json:"legalities,omitempty"`
	Loyalty *string `json:"loyalty,omitempty"`
	ManaCost *string `json:"manaCost,omitempty"`
	Multiverseid *string `json:"multiverseid,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *string `json:"number,omitempty"`
	OriginalText *string `json:"originalText,omitempty"`
	OriginalType *string `json:"originalType,omitempty"`
	Power *string `json:"power,omitempty"`
	Printings *[]any `json:"printings,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Rulings *[]any `json:"rulings,omitempty"`
	Set *string `json:"set,omitempty"`
	SetName *string `json:"setName,omitempty"`
	Subtypes *[]any `json:"subtypes,omitempty"`
	Supertypes *[]any `json:"supertypes,omitempty"`
	Text *string `json:"text,omitempty"`
	Toughness *string `json:"toughness,omitempty"`
	Type *string `json:"type,omitempty"`
	Types *[]any `json:"types,omitempty"`
}

// Set is the typed data model for the set entity.
type Set struct {
	Block *string `json:"block,omitempty"`
	Booster *[]any `json:"booster,omitempty"`
	Border *string `json:"border,omitempty"`
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	OnlineOnly *bool `json:"onlineOnly,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SetListMatch is the typed request payload for Set.ListTyped.
type SetListMatch struct {
	Block *string `json:"block,omitempty"`
	Booster *[]any `json:"booster,omitempty"`
	Border *string `json:"border,omitempty"`
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	OnlineOnly *bool `json:"onlineOnly,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
