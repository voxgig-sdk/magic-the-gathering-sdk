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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAGIC_THE_GATHERING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAGIC_THE_GATHERING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MagicTheGatheringSDK.test();
        const ent = testsdk.Card();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAGIC_THE_GATHERING_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'card.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "artist": { "a": true, "h": "Artist", "n": "artist", "r": false, "sh": "Artist who illustrated the card", "t": "`$STRING`", "key$": "artist", "index$": 0 }, "cmc": { "a": true, "h": "Cmc", "n": "cmc", "r": false, "sh": "Converted mana cost", "t": "`$NUMBER`", "key$": "cmc", "index$": 1 }, "colorIdentity": { "a": true, "h": "Color Identity", "n": "colorIdentity", "r": false, "sh": "Color identity of the card", "t": "`$ARRAY`", "key$": "colorIdentity", "index$": 2 }, "colors": { "a": true, "h": "Colors", "n": "colors", "r": false, "sh": "Array of card colors", "t": "`$ARRAY`", "key$": "colors", "index$": 3 }, "flavor": { "a": true, "h": "Flavor", "n": "flavor", "r": false, "sh": "Flavor text of the card", "t": "`$STRING`", "key$": "flavor", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the card", "t": "`$STRING`", "key$": "id", "index$": 5 }, "imageUrl": { "a": true, "fo": "uri", "h": "Image Url", "n": "imageUrl", "r": false, "sh": "URL to the card image", "t": "`$STRING`", "key$": "imageUrl", "index$": 6 }, "legalities": { "a": true, "h": "Legalities", "n": "legalities", "r": false, "sh": "Legality status in various formats", "t": "`$ARRAY`", "key$": "legalities", "index$": 7 }, "loyalty": { "a": true, "h": "Loyalty", "n": "loyalty", "r": false, "sh": "Loyalty of the card (for planeswalkers)", "t": "`$STRING`", "key$": "loyalty", "index$": 8 }, "manaCost": { "a": true, "h": "Mana Cost", "n": "manaCost", "r": false, "sh": "Mana cost of the card", "t": "`$STRING`", "key$": "manaCost", "index$": 9 }, "multiverseid": { "a": true, "h": "Multiverseid", "n": "multiverseid", "r": false, "sh": "Multiverse ID of the card", "t": "`$STRING`", "key$": "multiverseid", "index$": 10 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the card", "t": "`$STRING`", "key$": "name", "index$": 11 }, "number": { "a": true, "h": "Number", "n": "number", "r": false, "sh": "Collector number of the card", "t": "`$STRING`", "key$": "number", "index$": 12 }, "originalText": { "a": true, "h": "Original Text", "n": "originalText", "r": false, "sh": "Original text of the card", "t": "`$STRING`", "key$": "originalText", "index$": 13 }, "originalType": { "a": true, "h": "Original Type", "n": "originalType", "r": false, "sh": "Original type of the card", "t": "`$STRING`", "key$": "originalType", "index$": 14 }, "power": { "a": true, "h": "Power", "n": "power", "r": false, "sh": "Power of the card (for creatures)", "t": "`$STRING`", "key$": "power", "index$": 15 }, "printings": { "a": true, "h": "Printings", "n": "printings", "r": false, "sh": "List of set codes where this card was printed", "t": "`$ARRAY`", "key$": "printings", "index$": 16 }, "rarity": { "a": true, "h": "Rarity", "n": "rarity", "r": false, "sh": "Rarity of the card", "t": "`$STRING`", "key$": "rarity", "index$": 17 }, "rulings": { "a": true, "h": "Rulings", "n": "rulings", "r": false, "sh": "Official rulings for the card", "t": "`$ARRAY`", "key$": "rulings", "index$": 18 }, "set": { "a": true, "h": "Set", "n": "set", "r": false, "sh": "Set code the card belongs to", "t": "`$STRING`", "key$": "set", "index$": 19 }, "setName": { "a": true, "h": "Set Name", "n": "setName", "r": false, "sh": "Name of the set", "t": "`$STRING`", "key$": "setName", "index$": 20 }, "subtypes": { "a": true, "h": "Subtypes", "n": "subtypes", "r": false, "sh": "Subtypes of the card", "t": "`$ARRAY`", "key$": "subtypes", "index$": 21 }, "supertypes": { "a": true, "h": "Supertypes", "n": "supertypes", "r": false, "sh": "Supertypes of the card", "t": "`$ARRAY`", "key$": "supertypes", "index$": 22 }, "text": { "a": true, "h": "Text", "n": "text", "r": false, "sh": "Rules text of the card", "t": "`$STRING`", "key$": "text", "index$": 23 }, "toughness": { "a": true, "h": "Toughness", "n": "toughness", "r": false, "sh": "Toughness of the card (for creatures)", "t": "`$STRING`", "key$": "toughness", "index$": 24 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type line of the card", "t": "`$STRING`", "key$": "type", "index$": 25 }, "types": { "a": true, "h": "Types", "n": "types", "r": false, "sh": "Types of the card", "t": "`$ARRAY`", "key$": "types", "index$": 26 } }, "id": { "field": "id", "name": "id" }, "name": "card", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /cards", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cmc", "or": "cmc", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "color", "or": "colors", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 100, "k": "query", "n": "page_size", "or": "pageSize", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "rarity", "or": "rarity", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "set", "or": "set", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/cards", "q": { "exist": ["cmc", "color", "name", "page", "page_size", "rarity", "set", "type"] }, "r": {}, "s": [{ "lit": "cards" }], "t": { "req": "`reqdata`", "res": "`body.cards`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /cards/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/cards/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "cards" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.card`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "card", "name__orig": "card", "Name": "Card", "name_": "card", "name-": "card", "NAME": "CARD", "index$": 0 }, { "active": true, "entity": "card", "key$": "BasicCardFlow", "kind": "basic", "name": "BasicCardFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "card_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "card_ref01", "srcdatavar": "card_ref01_data", "suffix": "_dt0" }, "m": { "id": "card01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-card_ref01" } }], "index$": 1 }] }, 'Card', { "GET /cards": { "protocol": "http", "parameters": [{ "name": "name", "in": "query", "description": "Filter cards by name", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "set", "in": "query", "description": "Filter cards by set code", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "colors", "in": "query", "description": "Filter cards by color (e.g., red, blue, green, white, black)", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "cmc", "in": "query", "description": "Filter cards by converted mana cost", "required": false, "schema": { "type": "integer" }, "index$": 3 }, { "name": "type", "in": "query", "description": "Filter cards by type (e.g., creature, instant, sorcery)", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "rarity", "in": "query", "description": "Filter cards by rarity (e.g., common, uncommon, rare, mythic)", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1 }, "index$": 6 }, { "name": "pageSize", "in": "query", "description": "Number of results per page (max 100)", "required": false, "schema": { "type": "integer", "default": 100, "maximum": 100 }, "index$": 7 }] }, "GET /cards/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "Unique identifier for the card", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let card_ref01_data = Object.values(setup.data.existing.card)[0];
        // LIST
        const card_ref01_ent = client.Card();
        const card_ref01_match = {};
        const card_ref01_list = (await card_ref01_ent.list(card_ref01_match)).map((e) => e.data());
        // LOAD
        const card_ref01_match_dt0 = {};
        card_ref01_match_dt0.id = card_ref01_data.id;
        const card_ref01_data_dt0 = (await card_ref01_ent.load(card_ref01_match_dt0)).data();
        (0, node_assert_1.default)(card_ref01_data_dt0.id === card_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/card/CardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MagicTheGatheringSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['card01', 'card02', 'card03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAGIC_THE_GATHERING_TEST_CARD_ENTID': idmap,
        'MAGIC_THE_GATHERING_TEST_LIVE': 'FALSE',
        'MAGIC_THE_GATHERING_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MAGIC_THE_GATHERING_TEST_CARD_ENTID'];
    const live = 'TRUE' === env.MAGIC_THE_GATHERING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAGIC_THE_GATHERING_TEST_CARD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MagicTheGatheringSDK(merge([
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
        explain: 'TRUE' === env.MAGIC_THE_GATHERING_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CardEntity.test.js.map