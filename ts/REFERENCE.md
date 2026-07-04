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
const card = client.card
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | ``$STRING`` | No |  |
| `card` | ``$OBJECT`` | No |  |
| `cmc` | ``$NUMBER`` | No |  |
| `color` | ``$ARRAY`` | No |  |
| `color_identity` | ``$ARRAY`` | No |  |
| `flavor` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `legality` | ``$ARRAY`` | No |  |
| `loyalty` | ``$STRING`` | No |  |
| `mana_cost` | ``$STRING`` | No |  |
| `multiverseid` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `number` | ``$STRING`` | No |  |
| `original_text` | ``$STRING`` | No |  |
| `original_type` | ``$STRING`` | No |  |
| `power` | ``$STRING`` | No |  |
| `printing` | ``$ARRAY`` | No |  |
| `rarity` | ``$STRING`` | No |  |
| `ruling` | ``$ARRAY`` | No |  |
| `set` | ``$STRING`` | No |  |
| `set_name` | ``$STRING`` | No |  |
| `subtype` | ``$ARRAY`` | No |  |
| `supertype` | ``$ARRAY`` | No |  |
| `text` | ``$STRING`` | No |  |
| `toughness` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.card.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.card.load({ id: 'card_id' })
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
const set = client.set
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block` | ``$STRING`` | No |  |
| `booster` | ``$ARRAY`` | No |  |
| `border` | ``$STRING`` | No |  |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `online_only` | ``$BOOLEAN`` | No |  |
| `release_date` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.set.list()
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

