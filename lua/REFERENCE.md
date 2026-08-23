# MagicTheGathering Lua SDK Reference

Complete API reference for the MagicTheGathering Lua SDK.


## MagicTheGatheringSDK

### Constructor

```lua
local sdk = require("magic-the-gathering_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Card(data)`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Set(data)`

Create a new `Set` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CardEntity

```lua
local card = client:Card(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No | Artist who illustrated the card |
| `cmc` | `number` | No | Converted mana cost |
| `colorIdentity` | `table` | No | Color identity of the card |
| `colors` | `table` | No | Array of card colors |
| `flavor` | `string` | No | Flavor text of the card |
| `id` | `string` | No | Unique identifier for the card |
| `imageUrl` | `string` | No | URL to the card image |
| `legalities` | `table` | No | Legality status in various formats |
| `loyalty` | `string` | No | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | No | Mana cost of the card |
| `multiverseid` | `string` | No | Multiverse ID of the card |
| `name` | `string` | No | Name of the card |
| `number` | `string` | No | Collector number of the card |
| `originalText` | `string` | No | Original text of the card |
| `originalType` | `string` | No | Original type of the card |
| `power` | `string` | No | Power of the card (for creatures) |
| `printings` | `table` | No | List of set codes where this card was printed |
| `rarity` | `string` | No | Rarity of the card |
| `rulings` | `table` | No | Official rulings for the card |
| `set` | `string` | No | Set code the card belongs to |
| `setName` | `string` | No | Name of the set |
| `subtypes` | `table` | No | Subtypes of the card |
| `supertypes` | `table` | No | Supertypes of the card |
| `text` | `string` | No | Rules text of the card |
| `toughness` | `string` | No | Toughness of the card (for creatures) |
| `type` | `string` | No | Type line of the card |
| `types` | `table` | No | Types of the card |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Card():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Card():load({ id = "card_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SetEntity

```lua
local set = client:Set(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block` | `string` | No | Block the set belongs to |
| `booster` | `table` | No | Booster pack configuration |
| `border` | `string` | No | Border style of cards in the set |
| `code` | `string` | No | Unique set code |
| `name` | `string` | No | Name of the set |
| `onlineOnly` | `boolean` | No | Whether the set is online-only |
| `releaseDate` | `string` | No | Release date of the set |
| `type` | `string` | No | Type of the set (e.g., core, expansion) |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Set():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

