
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'MagicTheGathering',
        slug: "magic-the-gathering",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.magicthegathering.io/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      card: {
      },

      set: {
      },

    }
  }


  entity = {
    "card": {
      "fields": [
        {
          "name": "artist",
          "short": "Artist who illustrated the card",
          "type": "`$STRING`"
        },
        {
          "name": "cmc",
          "short": "Converted mana cost",
          "type": "`$NUMBER`"
        },
        {
          "name": "colorIdentity",
          "short": "Color identity of the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "colors",
          "short": "Array of card colors",
          "type": "`$ARRAY`"
        },
        {
          "name": "flavor",
          "short": "Flavor text of the card",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the card",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "imageUrl",
          "short": "URL to the card image",
          "type": "`$STRING`"
        },
        {
          "name": "legalities",
          "short": "Legality status in various formats",
          "type": "`$ARRAY`"
        },
        {
          "name": "loyalty",
          "short": "Loyalty of the card (for planeswalkers)",
          "type": "`$STRING`"
        },
        {
          "name": "manaCost",
          "short": "Mana cost of the card",
          "type": "`$STRING`"
        },
        {
          "name": "multiverseid",
          "short": "Multiverse ID of the card",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the card",
          "type": "`$STRING`"
        },
        {
          "name": "number",
          "short": "Collector number of the card",
          "type": "`$STRING`"
        },
        {
          "name": "originalText",
          "short": "Original text of the card",
          "type": "`$STRING`"
        },
        {
          "name": "originalType",
          "short": "Original type of the card",
          "type": "`$STRING`"
        },
        {
          "name": "power",
          "short": "Power of the card (for creatures)",
          "type": "`$STRING`"
        },
        {
          "name": "printings",
          "short": "List of set codes where this card was printed",
          "type": "`$ARRAY`"
        },
        {
          "name": "rarity",
          "short": "Rarity of the card",
          "type": "`$STRING`"
        },
        {
          "name": "rulings",
          "short": "Official rulings for the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "set",
          "short": "Set code the card belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "setName",
          "short": "Name of the set",
          "type": "`$STRING`"
        },
        {
          "name": "subtypes",
          "short": "Subtypes of the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "supertypes",
          "short": "Supertypes of the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "text",
          "short": "Rules text of the card",
          "type": "`$STRING`"
        },
        {
          "name": "toughness",
          "short": "Toughness of the card (for creatures)",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type line of the card",
          "type": "`$STRING`"
        },
        {
          "name": "types",
          "short": "Types of the card",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "card",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "cmc",
                    "orig": "cmc",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "color",
                    "orig": "color",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "rarity",
                    "orig": "rarity",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "set",
                    "orig": "set",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cards",
              "segments": [
                {
                  "lit": "cards"
                }
              ],
              "select": {
                "exist": [
                  "cmc",
                  "color",
                  "name",
                  "page",
                  "page_size",
                  "rarity",
                  "set",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.cards`"
              },
              "parts": [
                "cards"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cards/{id}",
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.card`"
              },
              "parts": [
                "cards",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "set": {
      "fields": [
        {
          "name": "block",
          "short": "Block the set belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "booster",
          "short": "Booster pack configuration",
          "type": "`$ARRAY`"
        },
        {
          "name": "border",
          "short": "Border style of cards in the set",
          "type": "`$STRING`"
        },
        {
          "name": "code",
          "short": "Unique set code",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the set",
          "type": "`$STRING`"
        },
        {
          "name": "onlineOnly",
          "short": "Whether the set is online-only",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date",
          "name": "releaseDate",
          "short": "Release date of the set",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the set (e.g., core, expansion)",
          "type": "`$STRING`"
        }
      ],
      "name": "set",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "block",
                    "orig": "block",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/sets",
              "segments": [
                {
                  "lit": "sets"
                }
              ],
              "select": {
                "exist": [
                  "block",
                  "name"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.sets`"
              },
              "parts": [
                "sets"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

