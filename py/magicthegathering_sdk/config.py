# MagicTheGathering SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
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
            "short": "Artist who illustrated the card",
            "type": "`$STRING`",
          },
          {
            "name": "cmc",
            "short": "Converted mana cost",
            "type": "`$NUMBER`",
          },
          {
            "name": "colorIdentity",
            "short": "Color identity of the card",
            "type": "`$ARRAY`",
          },
          {
            "name": "colors",
            "short": "Array of card colors",
            "type": "`$ARRAY`",
          },
          {
            "name": "flavor",
            "short": "Flavor text of the card",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the card",
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "short": "URL to the card image",
            "type": "`$STRING`",
          },
          {
            "name": "legalities",
            "short": "Legality status in various formats",
            "type": "`$ARRAY`",
          },
          {
            "name": "loyalty",
            "short": "Loyalty of the card (for planeswalkers)",
            "type": "`$STRING`",
          },
          {
            "name": "manaCost",
            "short": "Mana cost of the card",
            "type": "`$STRING`",
          },
          {
            "name": "multiverseid",
            "short": "Multiverse ID of the card",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the card",
            "type": "`$STRING`",
          },
          {
            "name": "number",
            "short": "Collector number of the card",
            "type": "`$STRING`",
          },
          {
            "name": "originalText",
            "short": "Original text of the card",
            "type": "`$STRING`",
          },
          {
            "name": "originalType",
            "short": "Original type of the card",
            "type": "`$STRING`",
          },
          {
            "name": "power",
            "short": "Power of the card (for creatures)",
            "type": "`$STRING`",
          },
          {
            "name": "printings",
            "short": "List of set codes where this card was printed",
            "type": "`$ARRAY`",
          },
          {
            "name": "rarity",
            "short": "Rarity of the card",
            "type": "`$STRING`",
          },
          {
            "name": "rulings",
            "short": "Official rulings for the card",
            "type": "`$ARRAY`",
          },
          {
            "name": "set",
            "short": "Set code the card belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "setName",
            "short": "Name of the set",
            "type": "`$STRING`",
          },
          {
            "name": "subtypes",
            "short": "Subtypes of the card",
            "type": "`$ARRAY`",
          },
          {
            "name": "supertypes",
            "short": "Supertypes of the card",
            "type": "`$ARRAY`",
          },
          {
            "name": "text",
            "short": "Rules text of the card",
            "type": "`$STRING`",
          },
          {
            "name": "toughness",
            "short": "Toughness of the card (for creatures)",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type line of the card",
            "type": "`$STRING`",
          },
          {
            "name": "types",
            "short": "Types of the card",
            "type": "`$ARRAY`",
          },
        ],
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "color",
                      "orig": "color",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "rarity",
                      "orig": "rarity",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "set",
                      "orig": "set",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cards",
                "parts": [
                  "cards",
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
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.cards`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cards/{id}",
                "parts": [
                  "cards",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.card`",
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
            "short": "Block the set belongs to",
            "type": "`$STRING`",
          },
          {
            "name": "booster",
            "short": "Booster pack configuration",
            "type": "`$ARRAY`",
          },
          {
            "name": "border",
            "short": "Border style of cards in the set",
            "type": "`$STRING`",
          },
          {
            "name": "code",
            "short": "Unique set code",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the set",
            "type": "`$STRING`",
          },
          {
            "name": "onlineOnly",
            "short": "Whether the set is online-only",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "releaseDate",
            "short": "Release date of the set",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of the set (e.g., core, expansion)",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/sets",
                "parts": [
                  "sets",
                ],
                "select": {
                  "exist": [
                    "block",
                    "name",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.sets`",
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
