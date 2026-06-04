# MagicTheGathering SDK

Query Magic: The Gathering card and set data over a no-auth HTTPS API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Magic: The Gathering API

The [Magic: The Gathering API](https://magicthegathering.io/) is a community-run REST service that exposes card and set data for the Magic: The Gathering trading card game. All requests are served over HTTPS from `https://api.magicthegathering.io/v1/`.

What you get from the API:

- `/cards` — searchable card catalogue with filters for name, colors, type, rarity, set, artist, power/toughness, and more (up to 100 results per page).
- `/sets` — Magic sets with metadata such as code, release date, border type and block; `/sets/{id}/booster` simulates booster pack generation.
- `/types`, `/subtypes`, `/supertypes`, `/formats` — classification lists and supported game formats (Commander, Standard, Legacy, etc.).
- Card objects include mana cost, colors, type, rarity, artist, rulings, foreign names, printings and legality across formats.

Operational notes: no authentication is required. Applications are throttled to 5000 requests per hour, after which the API returns `403 Forbidden` with the message `Rate Limit Exceeded`; `Ratelimit-Limit` and `Ratelimit-Remaining` response headers expose the current quota. CORS is reported as disabled, so browser clients may need a proxy.

## Try it

**TypeScript**
```bash
npm install magic-the-gathering
```

**Python**
```bash
pip install magic-the-gathering-sdk
```

**PHP**
```bash
composer require voxgig/magic-the-gathering-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/magic-the-gathering-sdk/go
```

**Ruby**
```bash
gem install magic-the-gathering-sdk
```

**Lua**
```bash
luarocks install magic-the-gathering-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MagicTheGatheringSDK } from 'magic-the-gathering'

const client = new MagicTheGatheringSDK({})

// List all cards
const cards = await client.Card().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o magic-the-gathering-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "magic-the-gathering": {
      "command": "/abs/path/to/magic-the-gathering-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Card** | An individual Magic: The Gathering card with attributes such as name, mana cost, colors, type, rarity, artist, rulings, foreign names, printings and format legality; served from `/v1/cards` (and `/v1/cards/{id}`). | `/cards` |
| **Set** | A Magic expansion or release with code, name, release date, border type and block, served from `/v1/sets` (and `/v1/sets/{code}`), with `/v1/sets/{code}/booster` for simulated booster packs. | `/sets` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from magicthegathering_sdk import MagicTheGatheringSDK

client = MagicTheGatheringSDK({})

# List all cards
cards, err = client.Card(None).list(None, None)

# Load a specific card
card, err = client.Card(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'magicthegathering_sdk.php';

$client = new MagicTheGatheringSDK([]);

// List all cards
[$cards, $err] = $client->Card(null)->list(null, null);

// Load a specific card
[$card, $err] = $client->Card(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/magic-the-gathering-sdk/go"

client := sdk.NewMagicTheGatheringSDK(map[string]any{})

// List all cards
cards, err := client.Card(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "MagicTheGathering_sdk"

client = MagicTheGatheringSDK.new({})

# List all cards
cards, err = client.Card(nil).list(nil, nil)

# Load a specific card
card, err = client.Card(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("magic-the-gathering_sdk")

local client = sdk.new({})

-- List all cards
local cards, err = client:Card(nil):list(nil, nil)

-- Load a specific card
local card, err = client:Card(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MagicTheGatheringSDK.test()
const result = await client.Card().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MagicTheGatheringSDK.test(None, None)
result, err = client.Card(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MagicTheGatheringSDK::test(null, null);
[$result, $err] = $client->Card(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Card(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MagicTheGatheringSDK.test(nil, nil)
result, err = client.Card(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Card(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Magic: The Gathering API

- Upstream: [https://magicthegathering.io/](https://magicthegathering.io/)
- API docs: [https://docs.magicthegathering.io/](https://docs.magicthegathering.io/)

- The API itself does not publish an explicit licence on its docs site.
- Magic: The Gathering card names, artwork, mana symbols and other game elements are trademarks and copyrights of Wizards of the Coast.
- Verify acceptable use with Wizards of the Coast's [Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy) before redistributing card data or imagery.

---

Generated from the Magic: The Gathering API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
