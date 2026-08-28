# MagicTheGathering PHP SDK



The PHP SDK for the MagicTheGathering API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Card()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/magic-the-gathering-sdk/releases](https://github.com/voxgig-sdk/magic-the-gathering-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'magicthegathering_sdk.php';

$client = new MagicTheGatheringSDK();
```

### 2. List card records

```php
try {
    // list() returns an array of Card records — iterate directly.
    $cards = $client->Card()->list();
    foreach ($cards as $item) {
        echo $item["id"] . " " . $item["artist"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a card

```php
try {
    // load() returns the ENTITY — call data_get() for the Card record (throws on error).
    $card = $client->Card()->load(["id" => "example_id"]);
    print_r($card);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $cards = $client->Card()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = MagicTheGatheringSDK::test([
    "entity" => ["card" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$card = $client->Card()->list();
print_r($card);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new MagicTheGatheringSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
MAGIC_THE_GATHERING_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### MagicTheGatheringSDK

```php
require_once 'magicthegathering_sdk.php';
$client = new MagicTheGatheringSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = MagicTheGatheringSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### MagicTheGatheringSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Card` | `($data): CardEntity` | Create a Card entity instance. |
| `Set` | `($data): SetEntity` | Create a Set entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Card

| Field | Description |
| --- | --- |
| `artist` | Artist who illustrated the card |
| `cmc` | Converted mana cost |
| `colorIdentity` | Color identity of the card |
| `colors` | Array of card colors |
| `flavor` | Flavor text of the card |
| `id` | Unique identifier for the card |
| `imageUrl` | URL to the card image |
| `legalities` | Legality status in various formats |
| `loyalty` | Loyalty of the card (for planeswalkers) |
| `manaCost` | Mana cost of the card |
| `multiverseid` | Multiverse ID of the card |
| `name` | Name of the card |
| `number` | Collector number of the card |
| `originalText` | Original text of the card |
| `originalType` | Original type of the card |
| `power` | Power of the card (for creatures) |
| `printings` | List of set codes where this card was printed |
| `rarity` | Rarity of the card |
| `rulings` | Official rulings for the card |
| `set` | Set code the card belongs to |
| `setName` | Name of the set |
| `subtypes` | Subtypes of the card |
| `supertypes` | Supertypes of the card |
| `text` | Rules text of the card |
| `toughness` | Toughness of the card (for creatures) |
| `type` | Type line of the card |
| `types` | Types of the card |

Operations: List, Load.

API path: `/cards`

#### Set

| Field | Description |
| --- | --- |
| `block` | Block the set belongs to |
| `booster` | Booster pack configuration |
| `border` | Border style of cards in the set |
| `code` | Unique set code |
| `name` | Name of the set |
| `onlineOnly` | Whether the set is online-only |
| `releaseDate` | Release date of the set |
| `type` | Type of the set (e.g., core, expansion) |

Operations: List.

API path: `/sets`



## Entities


### Card

Create an instance: `$card = $client->Card();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artist` | `string` | Artist who illustrated the card |
| `cmc` | `float` | Converted mana cost |
| `colorIdentity` | `array` | Color identity of the card |
| `colors` | `array` | Array of card colors |
| `flavor` | `string` | Flavor text of the card |
| `id` | `string` | Unique identifier for the card |
| `imageUrl` | `string` | URL to the card image |
| `legalities` | `array` | Legality status in various formats |
| `loyalty` | `string` | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | Mana cost of the card |
| `multiverseid` | `string` | Multiverse ID of the card |
| `name` | `string` | Name of the card |
| `number` | `string` | Collector number of the card |
| `originalText` | `string` | Original text of the card |
| `originalType` | `string` | Original type of the card |
| `power` | `string` | Power of the card (for creatures) |
| `printings` | `array` | List of set codes where this card was printed |
| `rarity` | `string` | Rarity of the card |
| `rulings` | `array` | Official rulings for the card |
| `set` | `string` | Set code the card belongs to |
| `setName` | `string` | Name of the set |
| `subtypes` | `array` | Subtypes of the card |
| `supertypes` | `array` | Supertypes of the card |
| `text` | `string` | Rules text of the card |
| `toughness` | `string` | Toughness of the card (for creatures) |
| `type` | `string` | Type line of the card |
| `types` | `array` | Types of the card |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Card record (throws on error).
$card = $client->Card()->load(["id" => "card_id"]);
```

#### Example: List

```php
// list() returns an array of Card records (throws on error).
$cards = $client->Card()->list();
```


### Set

Create an instance: `$set = $client->Set();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `block` | `string` | Block the set belongs to |
| `booster` | `array` | Booster pack configuration |
| `border` | `string` | Border style of cards in the set |
| `code` | `string` | Unique set code |
| `name` | `string` | Name of the set |
| `onlineOnly` | `bool` | Whether the set is online-only |
| `releaseDate` | `string` | Release date of the set |
| `type` | `string` | Type of the set (e.g., core, expansion) |

#### Example: List

```php
// list() returns an array of Set records (throws on error).
$sets = $client->Set()->list();
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── magicthegathering_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`magicthegathering_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$card = $client->Card();
$card->list();

// $card->data_get() now returns the card data from the last list
// $card->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
