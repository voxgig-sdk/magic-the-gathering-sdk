# MagicTheGathering Golang SDK



The Golang SDK for the MagicTheGathering API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Card(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/magic-the-gathering-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/magic-the-gathering-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/magic-the-gathering-sdk/go=../magic-the-gathering-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/magic-the-gathering-sdk/go"
)

func main() {
    client := sdk.New()

    // List card records — the value is the array of records itself.
    cards, err := client.Card(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range cards.([]any) {
        fmt.Println(item)
    }

    // Load a single card — the value is the loaded record.
    card, err := client.Card(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(card)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
cards, err := client.Card(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = cards
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

card, err := client.Card(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(card) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewMagicTheGatheringSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MAGIC_THE_GATHERING_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewMagicTheGatheringSDK

```go
func NewMagicTheGatheringSDK(options map[string]any) *MagicTheGatheringSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *MagicTheGatheringSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MagicTheGatheringSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Card` | `(data map[string]any) MagicTheGatheringEntity` | Create a Card entity instance. |
| `Set` | `(data map[string]any) MagicTheGatheringEntity` | Create a Set entity instance. |

### Entity interface (MagicTheGatheringEntity)

All entities implement the `MagicTheGatheringEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    card, err := client.Card(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // card is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Card

| Field | Description |
| --- | --- |
| `"artist"` | Artist who illustrated the card |
| `"cmc"` | Converted mana cost |
| `"colorIdentity"` | Color identity of the card |
| `"colors"` | Array of card colors |
| `"flavor"` | Flavor text of the card |
| `"id"` | Unique identifier for the card |
| `"imageUrl"` | URL to the card image |
| `"legalities"` | Legality status in various formats |
| `"loyalty"` | Loyalty of the card (for planeswalkers) |
| `"manaCost"` | Mana cost of the card |
| `"multiverseid"` | Multiverse ID of the card |
| `"name"` | Name of the card |
| `"number"` | Collector number of the card |
| `"originalText"` | Original text of the card |
| `"originalType"` | Original type of the card |
| `"power"` | Power of the card (for creatures) |
| `"printings"` | List of set codes where this card was printed |
| `"rarity"` | Rarity of the card |
| `"rulings"` | Official rulings for the card |
| `"set"` | Set code the card belongs to |
| `"setName"` | Name of the set |
| `"subtypes"` | Subtypes of the card |
| `"supertypes"` | Supertypes of the card |
| `"text"` | Rules text of the card |
| `"toughness"` | Toughness of the card (for creatures) |
| `"type"` | Type line of the card |
| `"types"` | Types of the card |

Operations: List, Load.

API path: `/cards`

#### Set

| Field | Description |
| --- | --- |
| `"block"` | Block the set belongs to |
| `"booster"` | Booster pack configuration |
| `"border"` | Border style of cards in the set |
| `"code"` | Unique set code |
| `"name"` | Name of the set |
| `"onlineOnly"` | Whether the set is online-only |
| `"releaseDate"` | Release date of the set |
| `"type"` | Type of the set (e.g., core, expansion) |

Operations: List.

API path: `/sets`



## Entities


### Card

Create an instance: `card := client.Card(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artist` | `string` | Artist who illustrated the card |
| `cmc` | `float64` | Converted mana cost |
| `colorIdentity` | `[]any` | Color identity of the card |
| `colors` | `[]any` | Array of card colors |
| `flavor` | `string` | Flavor text of the card |
| `id` | `string` | Unique identifier for the card |
| `imageUrl` | `string` | URL to the card image |
| `legalities` | `[]any` | Legality status in various formats |
| `loyalty` | `string` | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | Mana cost of the card |
| `multiverseid` | `string` | Multiverse ID of the card |
| `name` | `string` | Name of the card |
| `number` | `string` | Collector number of the card |
| `originalText` | `string` | Original text of the card |
| `originalType` | `string` | Original type of the card |
| `power` | `string` | Power of the card (for creatures) |
| `printings` | `[]any` | List of set codes where this card was printed |
| `rarity` | `string` | Rarity of the card |
| `rulings` | `[]any` | Official rulings for the card |
| `set` | `string` | Set code the card belongs to |
| `setName` | `string` | Name of the set |
| `subtypes` | `[]any` | Subtypes of the card |
| `supertypes` | `[]any` | Supertypes of the card |
| `text` | `string` | Rules text of the card |
| `toughness` | `string` | Toughness of the card (for creatures) |
| `type` | `string` | Type line of the card |
| `types` | `[]any` | Types of the card |

#### Example: Load

```go
card, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(card) // the loaded record
```

#### Example: List

```go
cards, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cards) // the array of records
```


### Set

Create an instance: `set := client.Set(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `block` | `string` | Block the set belongs to |
| `booster` | `[]any` | Booster pack configuration |
| `border` | `string` | Border style of cards in the set |
| `code` | `string` | Unique set code |
| `name` | `string` | Name of the set |
| `onlineOnly` | `bool` | Whether the set is online-only |
| `releaseDate` | `string` | Release date of the set |
| `type` | `string` | Type of the set (e.g., core, expansion) |

#### Example: List

```go
sets, err := client.Set(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sets) // the array of records
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/magic-the-gathering-sdk/go/
├── magic-the-gathering.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/magic-the-gathering-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
card := client.Card(nil)
card.List(nil, nil)

// card.Data() now returns the card data from the last list
// card.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
