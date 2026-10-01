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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Artist",
						"type": "`$STRING`",
						"short": "Artist who illustrated the card",
					},
					map[string]any{
						"name": "cmc",
						"title": "Cmc",
						"type": "`$NUMBER`",
						"short": "Converted mana cost",
					},
					map[string]any{
						"name": "colorIdentity",
						"title": "Color Identity",
						"type": "`$ARRAY`",
						"short": "Color identity of the card",
					},
					map[string]any{
						"name": "colors",
						"title": "Colors",
						"type": "`$ARRAY`",
						"short": "Array of card colors",
					},
					map[string]any{
						"name": "flavor",
						"title": "Flavor",
						"type": "`$STRING`",
						"short": "Flavor text of the card",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the card",
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"short": "URL to the card image",
						"format": "uri",
					},
					map[string]any{
						"name": "legalities",
						"title": "Legalities",
						"type": "`$ARRAY`",
						"short": "Legality status in various formats",
					},
					map[string]any{
						"name": "loyalty",
						"title": "Loyalty",
						"type": "`$STRING`",
						"short": "Loyalty of the card (for planeswalkers)",
					},
					map[string]any{
						"name": "manaCost",
						"title": "Mana Cost",
						"type": "`$STRING`",
						"short": "Mana cost of the card",
					},
					map[string]any{
						"name": "multiverseid",
						"title": "Multiverseid",
						"type": "`$STRING`",
						"short": "Multiverse ID of the card",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the card",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$STRING`",
						"short": "Collector number of the card",
					},
					map[string]any{
						"name": "originalText",
						"title": "Original Text",
						"type": "`$STRING`",
						"short": "Original text of the card",
					},
					map[string]any{
						"name": "originalType",
						"title": "Original Type",
						"type": "`$STRING`",
						"short": "Original type of the card",
					},
					map[string]any{
						"name": "power",
						"title": "Power",
						"type": "`$STRING`",
						"short": "Power of the card (for creatures)",
					},
					map[string]any{
						"name": "printings",
						"title": "Printings",
						"type": "`$ARRAY`",
						"short": "List of set codes where this card was printed",
					},
					map[string]any{
						"name": "rarity",
						"title": "Rarity",
						"type": "`$STRING`",
						"short": "Rarity of the card",
					},
					map[string]any{
						"name": "rulings",
						"title": "Rulings",
						"type": "`$ARRAY`",
						"short": "Official rulings for the card",
					},
					map[string]any{
						"name": "set",
						"title": "Set",
						"type": "`$STRING`",
						"short": "Set code the card belongs to",
					},
					map[string]any{
						"name": "setName",
						"title": "Set Name",
						"type": "`$STRING`",
						"short": "Name of the set",
					},
					map[string]any{
						"name": "subtypes",
						"title": "Subtypes",
						"type": "`$ARRAY`",
						"short": "Subtypes of the card",
					},
					map[string]any{
						"name": "supertypes",
						"title": "Supertypes",
						"type": "`$ARRAY`",
						"short": "Supertypes of the card",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$STRING`",
						"short": "Rules text of the card",
					},
					map[string]any{
						"name": "toughness",
						"title": "Toughness",
						"type": "`$STRING`",
						"short": "Toughness of the card (for creatures)",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type line of the card",
					},
					map[string]any{
						"name": "types",
						"title": "Types",
						"type": "`$ARRAY`",
						"short": "Types of the card",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "card",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
								},
								"parts": []any{
									"cards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.cards`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cmc",
											"orig": "cmc",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "color",
											"orig": "colors",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "pageSize",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "rarity",
											"orig": "rarity",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "set",
											"orig": "set",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"cards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.card`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Block",
						"type": "`$STRING`",
						"short": "Block the set belongs to",
					},
					map[string]any{
						"name": "booster",
						"title": "Booster",
						"type": "`$ARRAY`",
						"short": "Booster pack configuration",
					},
					map[string]any{
						"name": "border",
						"title": "Border",
						"type": "`$STRING`",
						"short": "Border style of cards in the set",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"short": "Unique set code",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the set",
					},
					map[string]any{
						"name": "onlineOnly",
						"title": "Online Only",
						"type": "`$BOOLEAN`",
						"short": "Whether the set is online-only",
					},
					map[string]any{
						"name": "releaseDate",
						"title": "Release Date",
						"type": "`$STRING`",
						"short": "Release date of the set",
						"format": "date",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of the set (e.g., core, expansion)",
					},
				},
				"name": "set",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/sets",
								"segments": []any{
									map[string]any{
										"lit": "sets",
									},
								},
								"parts": []any{
									"sets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.sets`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "block",
											"orig": "block",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"block",
										"name",
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
