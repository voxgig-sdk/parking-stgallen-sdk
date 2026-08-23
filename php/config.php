<?php
declare(strict_types=1);

// ParkingStgallen SDK configuration

class ParkingStgallenConfig
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
                "name" => "ParkingStgallen",
                "slug" => "parking-stgallen",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://daten.stadt.sg.ch/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "parking_record" => [],
                ],
            ],
            "entity" => [
        'parking_record' => [
          'fields' => [
            [
              'name' => 'datasetid',
              'short' => 'Dataset identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'fields',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'geometry',
              'short' => 'GeoJSON geometry',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'record_timestamp',
              'short' => 'Record processing timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'recordid',
              'short' => 'Unique record identifier',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'parking_record',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'freie-parkplatze-in-der-stadt-stgallen-pls',
                        'kind' => 'query',
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'exclude_phid',
                        'orig' => 'exclude_phid',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'exclude_phname',
                        'orig' => 'exclude_phname',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'facet',
                        'orig' => 'facet',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_phid',
                        'orig' => 'refine_phid',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_phname',
                        'orig' => 'refine_phname',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'UTC',
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/records/1.0/search/',
                  'parts' => [
                    'records',
                    '1.0',
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'exclude_phid',
                      'exclude_phname',
                      'facet',
                      'format',
                      'lang',
                      'q',
                      'refine_phid',
                      'refine_phname',
                      'row',
                      'sort',
                      'start',
                      'timezone',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
                    'query' => [
                      [
                        'example' => 'freie-parkplatze-in-der-stadt-stgallen-pls',
                        'kind' => 'query',
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'UTC',
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/records/1.0/download/',
                  'parts' => [
                    'records',
                    '1.0',
                    'download',
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'format',
                      'timezone',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
        return ParkingStgallenFeatures::make_feature($name);
    }
}
