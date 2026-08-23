# MagicTheGathering TypeScript SDK Reference

Complete API reference for the MagicTheGathering TypeScript SDK.


## MagicTheGatheringSDK

### Constructor

```ts
new MagicTheGatheringSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MagicTheGatheringSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MagicTheGatheringSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MagicTheGatheringSDK` instance in test mode.


### Instance Methods

#### `Card(data?: object)`

Create a new `Card` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardEntity` instance.

#### `Set(data?: object)`

Create a new `Set` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SetEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MagicTheGatheringSDK.test()`.

**Returns:** `MagicTheGatheringSDK` instance in test mode.


---

## CardEntity

```ts
const card = client.Card()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No | Artist who illustrated the card |
| `cmc` | `number` | No | Converted mana cost |
| `colorIdentity` | `any[]` | No | Color identity of the card |
| `colors` | `any[]` | No | Array of card colors |
| `flavor` | `string` | No | Flavor text of the card |
| `id` | `string` | No | Unique identifier for the card |
| `imageUrl` | `string` | No | URL to the card image |
| `legalities` | `any[]` | No | Legality status in various formats |
| `loyalty` | `string` | No | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | No | Mana cost of the card |
| `multiverseid` | `string` | No | Multiverse ID of the card |
| `name` | `string` | No | Name of the card |
| `number` | `string` | No | Collector number of the card |
| `originalText` | `string` | No | Original text of the card |
| `originalType` | `string` | No | Original type of the card |
| `power` | `string` | No | Power of the card (for creatures) |
| `printings` | `any[]` | No | List of set codes where this card was printed |
| `rarity` | `string` | No | Rarity of the card |
| `rulings` | `any[]` | No | Official rulings for the card |
| `set` | `string` | No | Set code the card belongs to |
| `setName` | `string` | No | Name of the set |
| `subtypes` | `any[]` | No | Subtypes of the card |
| `supertypes` | `any[]` | No | Supertypes of the card |
| `text` | `string` | No | Rules text of the card |
| `toughness` | `string` | No | Toughness of the card (for creatures) |
| `type` | `string` | No | Type line of the card |
| `types` | `any[]` | No | Types of the card |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Card().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Card().load({ id: 'card_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardEntity` instance with the same client and
options.

#### `client()`

Return the parent `MagicTheGatheringSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SetEntity

```ts
const set = client.Set()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block` | `string` | No | Block the set belongs to |
| `booster` | `any[]` | No | Booster pack configuration |
| `border` | `string` | No | Border style of cards in the set |
| `code` | `string` | No | Unique set code |
| `name` | `string` | No | Name of the set |
| `onlineOnly` | `boolean` | No | Whether the set is online-only |
| `releaseDate` | `string` | No | Release date of the set |
| `type` | `string` | No | Type of the set (e.g., core, expansion) |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Set().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SetEntity` instance with the same client and
options.

#### `client()`

Return the parent `MagicTheGatheringSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new MagicTheGatheringSDK({
  feature: {
    test: { active: true },
  }
})
```

