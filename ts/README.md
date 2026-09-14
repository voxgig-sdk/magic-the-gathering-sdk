# MagicTheGathering TypeScript SDK



The TypeScript SDK for the MagicTheGathering API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Card()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/magic-the-gathering-sdk/releases](https://github.com/voxgig-sdk/magic-the-gathering-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { MagicTheGatheringSDK } from '@voxgig-sdk/magic-the-gathering-sdk'

const client = new MagicTheGatheringSDK()
```

### 2. List card records

`list()` resolves to an array of Card ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const cards = await client.Card().list()

for (const card of cards) {
  console.log(card)
}
```

### 3. Load a card

`load()` returns the entity directly and throws on failure:

```ts
try {
  const card = await client.Card().load({ id: 'example_id' })
  console.log(card)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const cards = await client.Card().list()
  console.log(cards)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = MagicTheGatheringSDK.test()

const card = await client.Card().list()
// card is the entity, populated with mock response data
// — call card.data() for the record itself
console.log(card)
```

You can also use the instance method:

```ts
const client = new MagicTheGatheringSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Card()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new MagicTheGatheringSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MAGIC_THE_GATHERING_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### MagicTheGatheringSDK

#### Constructor

```ts
new MagicTheGatheringSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Card(data?)` | `CardEntity` | Create a Card entity instance. |
| `Set(data?)` | `SetEntity` | Create a Set entity instance. |
| `tester(testopts?, sdkopts?)` | `MagicTheGatheringSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `MagicTheGatheringSDK.test(testopts?, sdkopts?)` | `MagicTheGatheringSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): MagicTheGatheringSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: list, load.

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

Operations: list.

API path: `/sets`



## Entities


### Card

Create an instance: `const card = client.Card()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artist` | `string` | Artist who illustrated the card |
| `cmc` | `number` | Converted mana cost |
| `colorIdentity` | `any[]` | Color identity of the card |
| `colors` | `any[]` | Array of card colors |
| `flavor` | `string` | Flavor text of the card |
| `id` | `string` | Unique identifier for the card |
| `imageUrl` | `string` | URL to the card image |
| `legalities` | `any[]` | Legality status in various formats |
| `loyalty` | `string` | Loyalty of the card (for planeswalkers) |
| `manaCost` | `string` | Mana cost of the card |
| `multiverseid` | `string` | Multiverse ID of the card |
| `name` | `string` | Name of the card |
| `number` | `string` | Collector number of the card |
| `originalText` | `string` | Original text of the card |
| `originalType` | `string` | Original type of the card |
| `power` | `string` | Power of the card (for creatures) |
| `printings` | `any[]` | List of set codes where this card was printed |
| `rarity` | `string` | Rarity of the card |
| `rulings` | `any[]` | Official rulings for the card |
| `set` | `string` | Set code the card belongs to |
| `setName` | `string` | Name of the set |
| `subtypes` | `any[]` | Subtypes of the card |
| `supertypes` | `any[]` | Supertypes of the card |
| `text` | `string` | Rules text of the card |
| `toughness` | `string` | Toughness of the card (for creatures) |
| `type` | `string` | Type line of the card |
| `types` | `any[]` | Types of the card |

#### Example: Load

```ts
const card = await client.Card().load({ id: 'card_id' })
```

#### Example: List

```ts
const cards = await client.Card().list()
```


### Set

Create an instance: `const set = client.Set()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `block` | `string` | Block the set belongs to |
| `booster` | `any[]` | Booster pack configuration |
| `border` | `string` | Border style of cards in the set |
| `code` | `string` | Unique set code |
| `name` | `string` | Name of the set |
| `onlineOnly` | `boolean` | Whether the set is online-only |
| `releaseDate` | `string` | Release date of the set |
| `type` | `string` | Type of the set (e.g., core, expansion) |

#### Example: List

```ts
const sets = await client.Set().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
magic-the-gathering/
├── src/
│   ├── MagicTheGatheringSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { MagicTheGatheringSDK } from '@voxgig-sdk/magic-the-gathering-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const card = client.Card()
await card.list()

// card.data() now returns the card data from the last `list`
// card.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
