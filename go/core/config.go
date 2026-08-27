package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MagicTheGathering",
			"slug": "magic-the-gathering",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.magicthegathering.io/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"card": map[string]any{},
				"set": map[string]any{},
			},
		},
		"entity": map[string]any{
			"card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "artist",
						"short": "Artist who illustrated the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cmc",
						"short": "Converted mana cost",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "colorIdentity",
						"short": "Color identity of the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "colors",
						"short": "Array of card colors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "flavor",
						"short": "Flavor text of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"short": "URL to the card image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "legalities",
						"short": "Legality status in various formats",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "loyalty",
						"short": "Loyalty of the card (for planeswalkers)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "manaCost",
						"short": "Mana cost of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "multiverseid",
						"short": "Multiverse ID of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "number",
						"short": "Collector number of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalText",
						"short": "Original text of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "originalType",
						"short": "Original type of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "power",
						"short": "Power of the card (for creatures)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "printings",
						"short": "List of set codes where this card was printed",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rarity",
						"short": "Rarity of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rulings",
						"short": "Official rulings for the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "set",
						"short": "Set code the card belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "setName",
						"short": "Name of the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subtypes",
						"short": "Subtypes of the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supertypes",
						"short": "Supertypes of the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "text",
						"short": "Rules text of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toughness",
						"short": "Toughness of the card (for creatures)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type line of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "types",
						"short": "Types of the card",
						"type": "`$ARRAY`",
					},
				},
				"name": "card",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cmc",
											"orig": "cmc",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "rarity",
											"orig": "rarity",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "set",
											"orig": "set",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards",
								"parts": []any{
									"cards",
								},
								"select": map[string]any{
									"exist": []any{
										"cmc",
										"color",
										"name",
										"page",
										"page_size",
										"rarity",
										"set",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.cards`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}",
								"parts": []any{
									"cards",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.card`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"set": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "block",
						"short": "Block the set belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "booster",
						"short": "Booster pack configuration",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "border",
						"short": "Border style of cards in the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"short": "Unique set code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "onlineOnly",
						"short": "Whether the set is online-only",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "releaseDate",
						"short": "Release date of the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of the set (e.g., core, expansion)",
						"type": "`$STRING`",
					},
				},
				"name": "set",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "block",
											"orig": "block",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/sets",
								"parts": []any{
									"sets",
								},
								"select": map[string]any{
									"exist": []any{
										"block",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.sets`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
