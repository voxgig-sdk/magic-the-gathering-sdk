"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "card",
        "accessor": "Card",
        "op": "list",
        "method": "GET",
        "path": "/cards",
        "args": [],
        "select": {
            "cmc": "v1",
            "color": "v1",
            "name": "v1",
            "page": 1,
            "page_size": 100,
            "rarity": "v1",
            "set": "v1",
            "type": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "name",
            "set",
            "colors",
            "cmc",
            "type",
            "rarity",
            "page",
            "pageSize"
        ],
        "queryArgs": [
            {
                "name": "cmc",
                "wire": "cmc"
            },
            {
                "name": "color",
                "wire": "colors"
            },
            {
                "name": "name",
                "wire": "name"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "pageSize"
            },
            {
                "name": "rarity",
                "wire": "rarity"
            },
            {
                "name": "set",
                "wire": "set"
            },
            {
                "name": "type",
                "wire": "type"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "cards": [
                {
                    "id": "x",
                    "name": "x",
                    "manaCost": "x",
                    "cmc": 1,
                    "colors": [
                        "x"
                    ],
                    "colorIdentity": [
                        "x"
                    ],
                    "type": "x",
                    "supertypes": [
                        "x"
                    ],
                    "types": [
                        "x"
                    ],
                    "subtypes": [
                        "x"
                    ],
                    "rarity": "x",
                    "set": "x",
                    "setName": "x",
                    "text": "x",
                    "flavor": "x",
                    "artist": "x",
                    "number": "x",
                    "power": "x",
                    "toughness": "x",
                    "loyalty": "x",
                    "imageUrl": "x",
                    "multiverseid": "x",
                    "printings": [
                        "x"
                    ],
                    "originalText": "x",
                    "originalType": "x",
                    "legalities": [
                        {
                            "format": "x",
                            "legality": "x"
                        }
                    ],
                    "rulings": [
                        {
                            "date": "2026-01-01",
                            "text": "x"
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "card",
        "accessor": "Card",
        "op": "load",
        "method": "GET",
        "path": "/cards/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "card": {
                "id": "x",
                "name": "x",
                "manaCost": "x",
                "cmc": 1,
                "colors": [
                    "x"
                ],
                "colorIdentity": [
                    "x"
                ],
                "type": "x",
                "supertypes": [
                    "x"
                ],
                "types": [
                    "x"
                ],
                "subtypes": [
                    "x"
                ],
                "rarity": "x",
                "set": "x",
                "setName": "x",
                "text": "x",
                "flavor": "x",
                "artist": "x",
                "number": "x",
                "power": "x",
                "toughness": "x",
                "loyalty": "x",
                "imageUrl": "x",
                "multiverseid": "x",
                "printings": [
                    "x"
                ],
                "originalText": "x",
                "originalType": "x",
                "legalities": [
                    {
                        "format": "x",
                        "legality": "x"
                    }
                ],
                "rulings": [
                    {
                        "date": "2026-01-01",
                        "text": "x"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "set",
        "accessor": "Set",
        "op": "list",
        "method": "GET",
        "path": "/sets",
        "args": [],
        "select": {
            "block": "v1",
            "name": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "name",
            "block"
        ],
        "queryArgs": [
            {
                "name": "block",
                "wire": "block"
            },
            {
                "name": "name",
                "wire": "name"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "sets": [
                {
                    "code": "x",
                    "name": "x",
                    "type": "x",
                    "border": "x",
                    "releaseDate": "2026-01-01",
                    "block": "x",
                    "onlineOnly": true,
                    "booster": [
                        "x"
                    ]
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map