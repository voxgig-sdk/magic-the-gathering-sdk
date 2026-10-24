# MagicTheGathering SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MagicTheGathering",
            "slug": "magic-the-gathering",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.magicthegathering.io/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "card": {},
                "set": {},
            },
        },
        "entity": {
      "card": {
        "fields": [
          {
            "name": "artist",
            "title": "Artist",
            "type": "`$STRING`",
            "short": "Artist who illustrated the card",
          },
          {
            "name": "cmc",
            "title": "Cmc",
            "type": "`$NUMBER`",
            "short": "Converted mana cost",
          },
          {
            "name": "colorIdentity",
            "title": "Color Identity",
            "type": "`$ARRAY`",
            "short": "Color identity of the card",
          },
          {
            "name": "colors",
            "title": "Colors",
            "type": "`$ARRAY`",
            "short": "Array of card colors",
          },
          {
            "name": "flavor",
            "title": "Flavor",
            "type": "`$STRING`",
            "short": "Flavor text of the card",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the card",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to the card image",
            "format": "uri",
          },
          {
            "name": "legalities",
            "title": "Legalities",
            "type": "`$ARRAY`",
            "short": "Legality status in various formats",
          },
          {
            "name": "loyalty",
            "title": "Loyalty",
            "type": "`$STRING`",
            "short": "Loyalty of the card (for planeswalkers)",
          },
          {
            "name": "manaCost",
            "title": "Mana Cost",
            "type": "`$STRING`",
            "short": "Mana cost of the card",
          },
          {
            "name": "multiverseid",
            "title": "Multiverseid",
            "type": "`$STRING`",
            "short": "Multiverse ID of the card",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the card",
          },
          {
            "name": "number",
            "title": "Number",
            "type": "`$STRING`",
            "short": "Collector number of the card",
          },
          {
            "name": "originalText",
            "title": "Original Text",
            "type": "`$STRING`",
            "short": "Original text of the card",
          },
          {
            "name": "originalType",
            "title": "Original Type",
            "type": "`$STRING`",
            "short": "Original type of the card",
          },
          {
            "name": "power",
            "title": "Power",
            "type": "`$STRING`",
            "short": "Power of the card (for creatures)",
          },
          {
            "name": "printings",
            "title": "Printings",
            "type": "`$ARRAY`",
            "short": "List of set codes where this card was printed",
          },
          {
            "name": "rarity",
            "title": "Rarity",
            "type": "`$STRING`",
            "short": "Rarity of the card",
          },
          {
            "name": "rulings",
            "title": "Rulings",
            "type": "`$ARRAY`",
            "short": "Official rulings for the card",
          },
          {
            "name": "set",
            "title": "Set",
            "type": "`$STRING`",
            "short": "Set code the card belongs to",
          },
          {
            "name": "setName",
            "title": "Set Name",
            "type": "`$STRING`",
            "short": "Name of the set",
          },
          {
            "name": "subtypes",
            "title": "Subtypes",
            "type": "`$ARRAY`",
            "short": "Subtypes of the card",
          },
          {
            "name": "supertypes",
            "title": "Supertypes",
            "type": "`$ARRAY`",
            "short": "Supertypes of the card",
          },
          {
            "name": "text",
            "title": "Text",
            "type": "`$STRING`",
            "short": "Rules text of the card",
          },
          {
            "name": "toughness",
            "title": "Toughness",
            "type": "`$STRING`",
            "short": "Toughness of the card (for creatures)",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type line of the card",
          },
          {
            "name": "types",
            "title": "Types",
            "type": "`$ARRAY`",
            "short": "Types of the card",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "card",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cards",
                "segments": [
                  {
                    "lit": "cards",
                  },
                ],
                "parts": [
                  "cards",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.cards`",
                },
                "args": {
                  "query": [
                    {
                      "name": "cmc",
                      "orig": "cmc",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "color",
                      "orig": "colors",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "page_size",
                      "orig": "pageSize",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 100,
                    },
                    {
                      "name": "rarity",
                      "orig": "rarity",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "set",
                      "orig": "set",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cards/{id}",
                "segments": [
                  {
                    "lit": "cards",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "cards",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.card`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "set": {
        "fields": [
          {
            "name": "block",
            "title": "Block",
            "type": "`$STRING`",
            "short": "Block the set belongs to",
          },
          {
            "name": "booster",
            "title": "Booster",
            "type": "`$ARRAY`",
            "short": "Booster pack configuration",
          },
          {
            "name": "border",
            "title": "Border",
            "type": "`$STRING`",
            "short": "Border style of cards in the set",
          },
          {
            "name": "code",
            "title": "Code",
            "type": "`$STRING`",
            "short": "Unique set code",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the set",
          },
          {
            "name": "onlineOnly",
            "title": "Online Only",
            "type": "`$BOOLEAN`",
            "short": "Whether the set is online-only",
          },
          {
            "name": "releaseDate",
            "title": "Release Date",
            "type": "`$STRING`",
            "short": "Release date of the set",
            "format": "date",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of the set (e.g., core, expansion)",
          },
        ],
        "name": "set",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/sets",
                "segments": [
                  {
                    "lit": "sets",
                  },
                ],
                "parts": [
                  "sets",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.sets`",
                },
                "args": {
                  "query": [
                    {
                      "name": "block",
                      "orig": "block",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
