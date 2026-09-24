# ParkingStgallen SDK configuration

module ParkingStgallenConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ParkingStgallen",
        "slug" => "parking-stgallen",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://daten.stadt.sg.ch/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "parking_record" => {},
        },
      },
      "entity" => {
        "parking_record" => {
          "fields" => [
            {
              "name" => "datasetid",
              "title" => "Datasetid",
              "type" => "`$STRING`",
              "short" => "Dataset identifier",
            },
            {
              "name" => "fields",
              "title" => "Fields",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "geometry",
              "title" => "Geometry",
              "type" => "`$OBJECT`",
              "short" => "GeoJSON geometry",
            },
            {
              "name" => "record_timestamp",
              "title" => "Record Timestamp",
              "type" => "`$STRING`",
              "short" => "Record processing timestamp",
              "format" => "date-time",
            },
            {
              "name" => "recordid",
              "title" => "Recordid",
              "type" => "`$STRING`",
              "short" => "Unique record identifier",
            },
          ],
          "name" => "parking_record",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/records/1.0/search/",
                  "segments" => [
                    {
                      "lit" => "records",
                    },
                    {
                      "lit" => "1.0",
                    },
                    {
                      "lit" => "search",
                    },
                  ],
                  "parts" => [
                    "records",
                    "1.0",
                    "search",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "dataset",
                        "orig" => "dataset",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "freie-parkplatze-in-der-stadt-stgallen-pls",
                      },
                      {
                        "name" => "exclude_phid",
                        "orig" => "exclude_phid",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "exclude_phname",
                        "orig" => "exclude_phname",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "facet",
                        "orig" => "facet",
                        "type" => "`$ARRAY`",
                        "kind" => "query",
                      },
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "de",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "refine_phid",
                        "orig" => "refine_phid",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "refine_phname",
                        "orig" => "refine_phname",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "row",
                        "orig" => "row",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "start",
                        "orig" => "start",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 0,
                      },
                      {
                        "name" => "timezone",
                        "orig" => "timezone",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "UTC",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "dataset",
                      "exclude_phid",
                      "exclude_phname",
                      "facet",
                      "format",
                      "lang",
                      "q",
                      "refine_phid",
                      "refine_phname",
                      "row",
                      "sort",
                      "start",
                      "timezone",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/records/1.0/download/",
                  "segments" => [
                    {
                      "lit" => "records",
                    },
                    {
                      "lit" => "1.0",
                    },
                    {
                      "lit" => "download",
                    },
                  ],
                  "parts" => [
                    "records",
                    "1.0",
                    "download",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "dataset",
                        "orig" => "dataset",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "freie-parkplatze-in-der-stadt-stgallen-pls",
                      },
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "timezone",
                        "orig" => "timezone",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "UTC",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "dataset",
                      "format",
                      "timezone",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ParkingStgallenFeatures.make_feature(name)
  end
end
