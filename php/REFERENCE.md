# MagicTheGathering PHP SDK Reference

Complete API reference for the MagicTheGathering PHP SDK.


## MagicTheGatheringSDK

### Constructor

```php
require_once __DIR__ . '/magicthegathering_sdk.php';

$client = new MagicTheGatheringSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MagicTheGatheringSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MagicTheGatheringSDK::test();
```


### Instance Methods

#### `Card($data = null)`

Create a new `CardEntity` instance. Pass `null` for no initial data.

#### `Set($data = null)`

Create a new `SetEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MagicTheGatheringUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CardEntity

```php
$card = $client->Card();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No | Artist who illustrated the card |
| `cmc` | `float` | No | Converted mana cost |
| `colorIdentity` | `array` | No | Color identity of the card |
| `colors` | `array` | No | Array of card colors |
| `flavor` | `string` | No | Flavor text of the card |
| `id` | `string` | No | Unique identifier for the card |
| `imageUrl` | `string` | No | URL to the card image |
| `legalities` | `array` | No | Legality status in various formats |
| `loyalty` | `string` | No | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | No | Mana cost of the card |
| `multiverseid` | `string` | No | Multiverse ID of the card |
| `name` | `string` | No | Name of the card |
| `number` | `string` | No | Collector number of the card |
| `originalText` | `string` | No | Original text of the card |
| `originalType` | `string` | No | Original type of the card |
| `power` | `string` | No | Power of the card (for creatures) |
| `printings` | `array` | No | List of set codes where this card was printed |
| `rarity` | `string` | No | Rarity of the card |
| `rulings` | `array` | No | Official rulings for the card |
| `set` | `string` | No | Set code the card belongs to |
| `setName` | `string` | No | Name of the set |
| `subtypes` | `array` | No | Subtypes of the card |
| `supertypes` | `array` | No | Supertypes of the card |
| `text` | `string` | No | Rules text of the card |
| `toughness` | `string` | No | Toughness of the card (for creatures) |
| `type` | `string` | No | Type line of the card |
| `types` | `array` | No | Types of the card |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Card()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Card()->load(["id" => "card_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardEntity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SetEntity

```php
$set = $client->Set();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block` | `string` | No | Block the set belongs to |
| `booster` | `array` | No | Booster pack configuration |
| `border` | `string` | No | Border style of cards in the set |
| `code` | `string` | No | Unique set code |
| `name` | `string` | No | Name of the set |
| `onlineOnly` | `bool` | No | Whether the set is online-only |
| `releaseDate` | `string` | No | Release date of the set |
| `type` | `string` | No | Type of the set (e.g., core, expansion) |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Set()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SetEntity`

Create a new `SetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new MagicTheGatheringSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

