# MagicTheGathering Python SDK Reference

Complete API reference for the MagicTheGathering Python SDK.


## MagicTheGatheringSDK

### Constructor

```python
from magicthegathering_sdk import MagicTheGatheringSDK

client = MagicTheGatheringSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MagicTheGatheringSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MagicTheGatheringSDK.test()
```


### Instance Methods

#### `Card(data=None)`

Create a new `CardEntity` instance. Pass `None` for no initial data.

#### `Set(data=None)`

Create a new `SetEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CardEntity

```python
card = client.Card()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `str` | No | Artist who illustrated the card |
| `cmc` | `float` | No | Converted mana cost |
| `colorIdentity` | `list` | No | Color identity of the card |
| `colors` | `list` | No | Array of card colors |
| `flavor` | `str` | No | Flavor text of the card |
| `id` | `str` | No | Unique identifier for the card |
| `imageUrl` | `str` | No | URL to the card image |
| `legalities` | `list` | No | Legality status in various formats |
| `loyalty` | `str` | No | Loyalty of the card (for planeswalkers) |
| `manaCost` | `str` | No | Mana cost of the card |
| `multiverseid` | `str` | No | Multiverse ID of the card |
| `name` | `str` | No | Name of the card |
| `number` | `str` | No | Collector number of the card |
| `originalText` | `str` | No | Original text of the card |
| `originalType` | `str` | No | Original type of the card |
| `power` | `str` | No | Power of the card (for creatures) |
| `printings` | `list` | No | List of set codes where this card was printed |
| `rarity` | `str` | No | Rarity of the card |
| `rulings` | `list` | No | Official rulings for the card |
| `set` | `str` | No | Set code the card belongs to |
| `setName` | `str` | No | Name of the set |
| `subtypes` | `list` | No | Subtypes of the card |
| `supertypes` | `list` | No | Supertypes of the card |
| `text` | `str` | No | Rules text of the card |
| `toughness` | `str` | No | Toughness of the card (for creatures) |
| `type` | `str` | No | Type line of the card |
| `types` | `list` | No | Types of the card |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Card().list()
for card in results:
    print(card)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Card().load({"id": "card_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SetEntity

```python
set = client.Set()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block` | `str` | No | Block the set belongs to |
| `booster` | `list` | No | Booster pack configuration |
| `border` | `str` | No | Border style of cards in the set |
| `code` | `str` | No | Unique set code |
| `name` | `str` | No | Name of the set |
| `onlineOnly` | `bool` | No | Whether the set is online-only |
| `releaseDate` | `str` | No | Release date of the set |
| `type` | `str` | No | Type of the set (e.g., core, expansion) |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Set().list()
for set in results:
    print(set)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = MagicTheGatheringSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

