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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "artist", "req": false, "short": "Artist who illustrated the card", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "cmc", "req": false, "short": "Converted mana cost", "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "colorIdentity", "req": false, "short": "Color identity of the card", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "colors", "req": false, "short": "Array of card colors", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "flavor", "req": false, "short": "Flavor text of the card", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the card", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "uri", "name": "imageUrl", "req": false, "short": "URL to the card image", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "legalities", "req": false, "short": "Legality status in various formats", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "loyalty", "req": false, "short": "Loyalty of the card (for planeswalkers)", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "manaCost", "req": false, "short": "Mana cost of the card", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "multiverseid", "req": false, "short": "Multiverse ID of the card", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "name", "req": false, "short": "Name of the card", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "number", "req": false, "short": "Collector number of the card", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "originalText", "req": false, "short": "Original text of the card", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "originalType", "req": false, "short": "Original type of the card", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "power", "req": false, "short": "Power of the card (for creatures)", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "printings", "req": false, "short": "List of set codes where this card was printed", "type": "`$ARRAY`", "index$": 16 }, { "active": true, "name": "rarity", "req": false, "short": "Rarity of the card", "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "rulings", "req": false, "short": "Official rulings for the card", "type": "`$ARRAY`", "index$": 18 }, { "active": true, "name": "set", "req": false, "short": "Set code the card belongs to", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "setName", "req": false, "short": "Name of the set", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "subtypes", "req": false, "short": "Subtypes of the card", "type": "`$ARRAY`", "index$": 21 }, { "active": true, "name": "supertypes", "req": false, "short": "Supertypes of the card", "type": "`$ARRAY`", "index$": 22 }, { "active": true, "name": "text", "req": false, "short": "Rules text of the card", "type": "`$STRING`", "index$": 23 }, { "active": true, "name": "toughness", "req": false, "short": "Toughness of the card (for creatures)", "type": "`$STRING`", "index$": 24 }, { "active": true, "name": "type", "req": false, "short": "Type line of the card", "type": "`$STRING`", "index$": 25 }, { "active": true, "name": "types", "req": false, "short": "Types of the card", "type": "`$ARRAY`", "index$": 26 }], "id": { "field": "id", "name": "id" }, "name": "card", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "cmc", "orig": "cmc", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "color", "orig": "color", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "example": 100, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "rarity", "orig": "rarity", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "set", "orig": "set", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 7 }] }, "contract": { "id": "GET /cards", "json": "{\"operationId\":\"getCards\",\"parameters\":[{\"description\":\"Filter cards by name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter cards by set code\",\"in\":\"query\",\"name\":\"set\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter cards by color (e.g., red, blue, green, white, black)\",\"in\":\"query\",\"name\":\"colors\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter cards by converted mana cost\",\"in\":\"query\",\"name\":\"cmc\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter cards by type (e.g., creature, instant, sorcery)\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter cards by rarity (e.g., common, uncommon, rare, mythic)\",\"in\":\"query\",\"name\":\"rarity\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page (max 100)\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":100,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"cards\":{\"items\":{\"properties\":{\"artist\":{\"description\":\"Artist who illustrated the card\",\"type\":\"string\"},\"cmc\":{\"description\":\"Converted mana cost\",\"type\":\"number\"},\"colorIdentity\":{\"description\":\"Color identity of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"colors\":{\"description\":\"Array of card colors\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"flavor\":{\"description\":\"Flavor text of the card\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the card\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to the card image\",\"format\":\"uri\",\"type\":\"string\"},\"legalities\":{\"description\":\"Legality status in various formats\",\"items\":{\"properties\":{\"format\":{\"type\":\"string\"},\"legality\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"loyalty\":{\"description\":\"Loyalty of the card (for planeswalkers)\",\"type\":\"string\"},\"manaCost\":{\"description\":\"Mana cost of the card\",\"type\":\"string\"},\"multiverseid\":{\"description\":\"Multiverse ID of the card\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the card\",\"type\":\"string\"},\"number\":{\"description\":\"Collector number of the card\",\"type\":\"string\"},\"originalText\":{\"description\":\"Original text of the card\",\"type\":\"string\"},\"originalType\":{\"description\":\"Original type of the card\",\"type\":\"string\"},\"power\":{\"description\":\"Power of the card (for creatures)\",\"type\":\"string\"},\"printings\":{\"description\":\"List of set codes where this card was printed\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"rarity\":{\"description\":\"Rarity of the card\",\"type\":\"string\"},\"rulings\":{\"description\":\"Official rulings for the card\",\"items\":{\"properties\":{\"date\":{\"format\":\"date\",\"type\":\"string\"},\"text\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"set\":{\"description\":\"Set code the card belongs to\",\"type\":\"string\"},\"setName\":{\"description\":\"Name of the set\",\"type\":\"string\"},\"subtypes\":{\"description\":\"Subtypes of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"supertypes\":{\"description\":\"Supertypes of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"Rules text of the card\",\"type\":\"string\"},\"toughness\":{\"description\":\"Toughness of the card (for creatures)\",\"type\":\"string\"},\"type\":{\"description\":\"Type line of the card\",\"type\":\"string\"},\"types\":{\"description\":\"Types of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of cards\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cards", "segments": [{ "lit": "cards" }], "select": { "exist": ["cmc", "color", "name", "page", "page_size", "rarity", "set", "type"] }, "transform": { "req": "`reqdata`", "res": "`body.cards`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /cards/{id}", "json": "{\"operationId\":\"getCardById\",\"parameters\":[{\"description\":\"Unique identifier for the card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"card\":{\"properties\":{\"artist\":{\"description\":\"Artist who illustrated the card\",\"type\":\"string\"},\"cmc\":{\"description\":\"Converted mana cost\",\"type\":\"number\"},\"colorIdentity\":{\"description\":\"Color identity of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"colors\":{\"description\":\"Array of card colors\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"flavor\":{\"description\":\"Flavor text of the card\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the card\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to the card image\",\"format\":\"uri\",\"type\":\"string\"},\"legalities\":{\"description\":\"Legality status in various formats\",\"items\":{\"properties\":{\"format\":{\"type\":\"string\"},\"legality\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"loyalty\":{\"description\":\"Loyalty of the card (for planeswalkers)\",\"type\":\"string\"},\"manaCost\":{\"description\":\"Mana cost of the card\",\"type\":\"string\"},\"multiverseid\":{\"description\":\"Multiverse ID of the card\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the card\",\"type\":\"string\"},\"number\":{\"description\":\"Collector number of the card\",\"type\":\"string\"},\"originalText\":{\"description\":\"Original text of the card\",\"type\":\"string\"},\"originalType\":{\"description\":\"Original type of the card\",\"type\":\"string\"},\"power\":{\"description\":\"Power of the card (for creatures)\",\"type\":\"string\"},\"printings\":{\"description\":\"List of set codes where this card was printed\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"rarity\":{\"description\":\"Rarity of the card\",\"type\":\"string\"},\"rulings\":{\"description\":\"Official rulings for the card\",\"items\":{\"properties\":{\"date\":{\"format\":\"date\",\"type\":\"string\"},\"text\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"set\":{\"description\":\"Set code the card belongs to\",\"type\":\"string\"},\"setName\":{\"description\":\"Name of the set\",\"type\":\"string\"},\"subtypes\":{\"description\":\"Subtypes of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"supertypes\":{\"description\":\"Supertypes of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"description\":\"Rules text of the card\",\"type\":\"string\"},\"toughness\":{\"description\":\"Toughness of the card (for creatures)\",\"type\":\"string\"},\"type\":{\"description\":\"Type line of the card\",\"type\":\"string\"},\"types\":{\"description\":\"Types of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with card details\"},\"404\":{\"description\":\"Card not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cards/{id}", "segments": [{ "lit": "cards" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.card`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "card", "name__orig": "card", "Name": "Card", "name_": "card", "name-": "card", "NAME": "CARD", "index$": 0 }, { "active": true, "entity": "card", "key$": "BasicCardFlow", "kind": "basic", "name": "BasicCardFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "card_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "card_ref01", "srcdatavar": "card_ref01_data", "suffix": "_dt0" }, "match": { "id": "card01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-card_ref01" } }], "index$": 1 }] }, 'Card');
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