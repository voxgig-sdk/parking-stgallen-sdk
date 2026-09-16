"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ParkingRecordEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PARKING_STGALLEN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PARKING_STGALLEN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ParkingStgallenSDK.test();
        const ent = testsdk.ParkingRecord();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PARKING_STGALLEN_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'parking_record.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "datasetid", "req": false, "short": "Dataset identifier", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "fields", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "geometry", "req": false, "short": "GeoJSON geometry", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "format": "date-time", "name": "record_timestamp", "req": false, "short": "Record processing timestamp", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "recordid", "req": false, "short": "Unique record identifier", "type": "`$STRING`", "index$": 4 }], "name": "parking_record", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "freie-parkplatze-in-der-stadt-stgallen-pls", "kind": "query", "name": "dataset", "orig": "dataset", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "exclude_phid", "orig": "exclude_phid", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "exclude_phname", "orig": "exclude_phname", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "facet", "orig": "facet", "reqd": false, "type": "`$ARRAY`", "index$": 3 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": "de", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "kind": "query", "name": "refine_phid", "orig": "refine_phid", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "kind": "query", "name": "refine_phname", "orig": "refine_phname", "reqd": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "example": 10, "kind": "query", "name": "row", "orig": "row", "reqd": false, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "example": 0, "kind": "query", "name": "start", "orig": "start", "reqd": false, "type": "`$INTEGER`", "index$": 11 }, { "active": true, "example": "UTC", "kind": "query", "name": "timezone", "orig": "timezone", "reqd": false, "type": "`$STRING`", "index$": 12 }] }, "contract": { "id": "GET /records/1.0/search/", "json": "{\"operationId\":\"searchParkingRecords\",\"parameters\":[{\"description\":\"Dataset identifier\",\"in\":\"query\",\"name\":\"dataset\",\"required\":true,\"schema\":{\"default\":\"freie-parkplatze-in-der-stadt-stgallen-pls\",\"type\":\"string\"}},{\"description\":\"Full-text search query\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results to return (max 100)\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Index of the first result to return (for pagination)\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Sort order (field name, optionally prefixed with - for descending order)\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Field(s) to facet on (can be used multiple times)\",\"explode\":true,\"in\":\"query\",\"name\":\"facet\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"phid\",\"phname\"],\"type\":\"string\"},\"type\":\"array\"}},{\"description\":\"Filter by parking house ID\",\"in\":\"query\",\"name\":\"refine.phid\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by parking house name\",\"in\":\"query\",\"name\":\"refine.phname\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude specific parking house ID\",\"in\":\"query\",\"name\":\"exclude.phid\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Exclude specific parking house name\",\"in\":\"query\",\"name\":\"exclude.phname\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"csv\",\"geojson\"],\"type\":\"string\"}},{\"description\":\"Timezone for date/time fields\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"UTC\",\"type\":\"string\"}},{\"description\":\"Language for results\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"en\",\"it\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/geo+json\":{\"schema\":{\"description\":\"GeoJSON formatted parking records\",\"type\":\"object\"}},\"application/json\":{\"schema\":{\"properties\":{\"facet_groups\":{\"description\":\"Facet results if faceting was requested\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"nhits\":{\"description\":\"Total number of matching records\",\"type\":\"integer\"},\"parameters\":{\"description\":\"Query parameters used for the search\",\"type\":\"object\"},\"records\":{\"items\":{\"properties\":{\"datasetid\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"fields\":{\"properties\":{\"free\":{\"description\":\"Number of free parking spaces\",\"type\":\"integer\"},\"geo_point_2d\":{\"description\":\"Geographic coordinates [lat, lon]\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"open\":{\"description\":\"Whether the parking house is open\",\"type\":\"boolean\"},\"phid\":{\"description\":\"Parking house ID\",\"type\":\"string\"},\"phname\":{\"description\":\"Parking house name\",\"type\":\"string\"},\"shortfree\":{\"description\":\"Number of available short-term parking spaces\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp of the data\",\"format\":\"date-time\",\"type\":\"string\"},\"total\":{\"description\":\"Total number of parking spaces\",\"type\":\"integer\"}},\"type\":\"object\"},\"geometry\":{\"description\":\"GeoJSON geometry\",\"type\":\"object\"},\"record_timestamp\":{\"description\":\"Record processing timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"recordid\":{\"description\":\"Unique record identifier\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"text/csv\":{\"schema\":{\"description\":\"CSV formatted parking records\",\"type\":\"string\"}}},\"description\":\"Successful response with parking records\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Dataset not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/records/1.0/search/", "segments": [{ "lit": "records" }, { "lit": "1.0" }, { "lit": "search" }], "select": { "exist": ["dataset", "exclude_phid", "exclude_phname", "facet", "format", "lang", "q", "refine_phid", "refine_phname", "row", "sort", "start", "timezone"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "freie-parkplatze-in-der-stadt-stgallen-pls", "kind": "query", "name": "dataset", "orig": "dataset", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "UTC", "kind": "query", "name": "timezone", "orig": "timezone", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /records/1.0/download/", "json": "{\"operationId\":\"downloadParkingRecords\",\"parameters\":[{\"description\":\"Dataset identifier\",\"in\":\"query\",\"name\":\"dataset\",\"required\":true,\"schema\":{\"default\":\"freie-parkplatze-in-der-stadt-stgallen-pls\",\"type\":\"string\"}},{\"description\":\"Download format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"csv\",\"geojson\",\"shp\"],\"type\":\"string\"}},{\"description\":\"Timezone for date/time fields\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"UTC\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/geo+json\":{\"schema\":{\"description\":\"Complete dataset in GeoJSON format\",\"type\":\"object\"}},\"application/json\":{\"schema\":{\"description\":\"Complete dataset in JSON format\",\"type\":\"object\"}},\"application/zip\":{\"schema\":{\"description\":\"Complete dataset in Shapefile format (zipped)\",\"format\":\"binary\",\"type\":\"string\"}},\"text/csv\":{\"schema\":{\"description\":\"Complete dataset in CSV format\",\"type\":\"string\"}}},\"description\":\"Successful download\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"404\":{\"description\":\"Dataset not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/records/1.0/download/", "segments": [{ "lit": "records" }, { "lit": "1.0" }, { "lit": "download" }], "select": { "exist": ["dataset", "format", "timezone"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "parking_record", "name__orig": "parking_record", "Name": "ParkingRecord", "name_": "parking_record", "name-": "parking-record", "NAME": "PARKING_RECORD", "index$": 0 }, { "active": true, "entity": "parking_record", "key$": "BasicParkingRecordFlow", "kind": "basic", "name": "BasicParkingRecordFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "parking_record_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "parking_record_ref01", "srcdatavar": "parking_record_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-parking_record_ref01" } }], "index$": 1 }] }, 'ParkingRecord');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let parking_record_ref01_data = Object.values(setup.data.existing.parking_record)[0];
        // LIST
        const parking_record_ref01_ent = client.ParkingRecord();
        const parking_record_ref01_match = {};
        const parking_record_ref01_list = (await parking_record_ref01_ent.list(parking_record_ref01_match)).map((e) => e.data());
        // LOAD
        const parking_record_ref01_match_dt0 = {};
        const parking_record_ref01_data_dt0 = (await parking_record_ref01_ent.load(parking_record_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != parking_record_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/parking_record/ParkingRecordTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ParkingStgallenSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['parking_record01', 'parking_record02', 'parking_record03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PARKING_STGALLEN_TEST_PARKING_RECORD_ENTID': idmap,
        'PARKING_STGALLEN_TEST_LIVE': 'FALSE',
        'PARKING_STGALLEN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PARKING_STGALLEN_TEST_PARKING_RECORD_ENTID'];
    const live = 'TRUE' === env.PARKING_STGALLEN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PARKING_STGALLEN_TEST_PARKING_RECORD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ParkingStgallenSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.PARKING_STGALLEN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ParkingRecordEntity.test.js.map