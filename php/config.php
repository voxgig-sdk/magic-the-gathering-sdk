<?php
declare(strict_types=1);

// MagicTheGathering SDK configuration

class MagicTheGatheringConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MagicTheGathering",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.magicthegathering.io/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "card" => [],
                    "set" => [],
                ],
            ],
            "entity" => [
        'card' => [
          'fields' => [
            [
              'name' => 'artist',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cmc',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'colorIdentity',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'colors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'flavor',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'legalities',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'loyalty',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'manaCost',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'multiverseid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'originalText',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'originalType',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'power',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'printings',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'rarity',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rulings',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'set',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'setName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subtypes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'supertypes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'toughness',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'types',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'card',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'cmc',
                        'orig' => 'cmc',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'color',
                        'orig' => 'color',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'rarity',
                        'orig' => 'rarity',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'set',
                        'orig' => 'set',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cards',
                  'parts' => [
                    'cards',
                  ],
                  'select' => [
                    'exist' => [
                      'cmc',
                      'color',
                      'name',
                      'page',
                      'page_size',
                      'rarity',
                      'set',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.cards`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cards/{id}',
                  'parts' => [
                    'cards',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.card`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'set' => [
          'fields' => [
            [
              'name' => 'block',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'booster',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'border',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'onlineOnly',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'releaseDate',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'set',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'block',
                        'orig' => 'block',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/sets',
                  'parts' => [
                    'sets',
                  ],
                  'select' => [
                    'exist' => [
                      'block',
                      'name',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.sets`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MagicTheGatheringFeatures::make_feature($name);
    }
}
