# MagicTheGathering Golang SDK Reference

Complete API reference for the MagicTheGathering Golang SDK.


## MagicTheGatheringSDK

### Constructor

```go
func NewMagicTheGatheringSDK(options map[string]any) *MagicTheGatheringSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *MagicTheGatheringSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *MagicTheGatheringSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Card(data map[string]any) MagicTheGatheringEntity`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Set(data map[string]any) MagicTheGatheringEntity`

Create a new `Set` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CardEntity

```go
card := client.Card(nil)
fmt.Println(card.GetName()) // "card"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No | Artist who illustrated the card |
| `cmc` | `float64` | No | Converted mana cost |
| `colorIdentity` | `[]any` | No | Color identity of the card |
| `colors` | `[]any` | No | Array of card colors |
| `flavor` | `string` | No | Flavor text of the card |
| `id` | `string` | No | Unique identifier for the card |
| `imageUrl` | `string` | No | URL to the card image |
| `legalities` | `[]any` | No | Legality status in various formats |
| `loyalty` | `string` | No | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | No | Mana cost of the card |
| `multiverseid` | `string` | No | Multiverse ID of the card |
| `name` | `string` | No | Name of the card |
| `number` | `string` | No | Collector number of the card |
| `originalText` | `string` | No | Original text of the card |
| `originalType` | `string` | No | Original type of the card |
| `power` | `string` | No | Power of the card (for creatures) |
| `printings` | `[]any` | No | List of set codes where this card was printed |
| `rarity` | `string` | No | Rarity of the card |
| `rulings` | `[]any` | No | Official rulings for the card |
| `set` | `string` | No | Set code the card belongs to |
| `setName` | `string` | No | Name of the set |
| `subtypes` | `[]any` | No | Subtypes of the card |
| `supertypes` | `[]any` | No | Supertypes of the card |
| `text` | `string` | No | Rules text of the card |
| `toughness` | `string` | No | Toughness of the card (for creatures) |
| `type` | `string` | No | Type line of the card |
| `types` | `[]any` | No | Types of the card |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SetEntity

```go
set := client.Set(nil)
fmt.Println(set.GetName()) // "set"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block` | `string` | No | Block the set belongs to |
| `booster` | `[]any` | No | Booster pack configuration |
| `border` | `string` | No | Border style of cards in the set |
| `code` | `string` | No | Unique set code |
| `name` | `string` | No | Name of the set |
| `onlineOnly` | `bool` | No | Whether the set is online-only |
| `releaseDate` | `string` | No | Release date of the set |
| `type` | `string` | No | Type of the set (e.g., core, expansion) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Set(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewMagicTheGatheringSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

