# ParkingStgallen SDK

Real-time availability of public parking facilities in the city of St.Gallen, Switzerland

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Parking St.Gallen API

The Parking St.Gallen API exposes real-time data on public parking facilities (Parkleitsystem / PLS) in the city of [St.Gallen, Switzerland](https://daten.stadt.sg.ch/). It is published by the city's open data portal, which is built on the [Opendatasoft](https://help.opendatasoft.com/) platform.

The primary dataset (`freie-parkplatze-in-der-stadt-stgallen-pls`) is exposed through the standard Opendatasoft Explore v2.1 API, which supports search, filtering, sorting, pagination, and export over the underlying parking records.

Operational notes: no authentication is required for read access. The community catalogue at freepublicapis.com reports that CORS is disabled on the endpoint, so browser-side calls may need to go through a proxy.

## Try it

**TypeScript**
```bash
npm install parking-stgallen
```

**Python**
```bash
pip install parking-stgallen-sdk
```

**PHP**
```bash
composer require voxgig/parking-stgallen-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/parking-stgallen-sdk/go
```

**Ruby**
```bash
gem install parking-stgallen-sdk
```

**Lua**
```bash
luarocks install parking-stgallen-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ParkingStgallenSDK } from 'parking-stgallen'

const client = new ParkingStgallenSDK({})

// List all parkingrecords
const parkingrecords = await client.ParkingRecord().list()
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
cd go-mcp && go build -o parking-stgallen-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "parking-stgallen": {
      "command": "/abs/path/to/parking-stgallen-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **ParkingRecord** | A single record from the public parking dataset, retrieved via `GET /explore/v2.1/catalog/datasets/freie-parkplatze-in-der-stadt-stgallen-pls/records` and representing a parking facility entry from the St.Gallen Parkleitsystem (PLS). | `/records/1.0/search/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from parkingstgallen_sdk import ParkingStgallenSDK

client = ParkingStgallenSDK({})

# List all parkingrecords
parkingrecords, err = client.ParkingRecord(None).list(None, None)

# Load a specific parkingrecord
parkingrecord, err = client.ParkingRecord(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'parkingstgallen_sdk.php';

$client = new ParkingStgallenSDK([]);

// List all parkingrecords
[$parkingrecords, $err] = $client->ParkingRecord(null)->list(null, null);

// Load a specific parkingrecord
[$parkingrecord, $err] = $client->ParkingRecord(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/parking-stgallen-sdk/go"

client := sdk.NewParkingStgallenSDK(map[string]any{})

// List all parkingrecords
parkingrecords, err := client.ParkingRecord(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "ParkingStgallen_sdk"

client = ParkingStgallenSDK.new({})

# List all parkingrecords
parkingrecords, err = client.ParkingRecord(nil).list(nil, nil)

# Load a specific parkingrecord
parkingrecord, err = client.ParkingRecord(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("parking-stgallen_sdk")

local client = sdk.new({})

-- List all parkingrecords
local parkingrecords, err = client:ParkingRecord(nil):list(nil, nil)

-- Load a specific parkingrecord
local parkingrecord, err = client:ParkingRecord(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ParkingStgallenSDK.test()
const result = await client.ParkingRecord().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ParkingStgallenSDK.test(None, None)
result, err = client.ParkingRecord(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ParkingStgallenSDK::test(null, null);
[$result, $err] = $client->ParkingRecord(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.ParkingRecord(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ParkingStgallenSDK.test(nil, nil)
result, err = client.ParkingRecord(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:ParkingRecord(nil):load(
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

## Using the Parking St.Gallen API

- Upstream: [https://daten.stadt.sg.ch/](https://daten.stadt.sg.ch/)
- API docs: [https://daten.stadt.sg.ch/api-console/](https://daten.stadt.sg.ch/api-console/)

---

Generated from the Parking St.Gallen API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
