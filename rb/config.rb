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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "short" => "Dataset identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "fields",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "geometry",
              "short" => "GeoJSON geometry",
              "type" => "`$OBJECT`",
            },
            {
              "format" => "date-time",
              "name" => "record_timestamp",
              "short" => "Record processing timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "recordid",
              "short" => "Unique record identifier",
              "type" => "`$STRING`",
            },
          ],
          "name" => "parking_record",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "freie-parkplatze-in-der-stadt-stgallen-pls",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "exclude_phid",
                        "orig" => "exclude_phid",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "exclude_phname",
                        "orig" => "exclude_phname",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "facet",
                        "orig" => "facet",
                        "type" => "`$ARRAY`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "de",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "refine_phid",
                        "orig" => "refine_phid",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "refine_phname",
                        "orig" => "refine_phname",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "row",
                        "orig" => "row",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start",
                        "orig" => "start",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "UTC",
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "records",
                    "1.0",
                    "search",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "freie-parkplatze-in-der-stadt-stgallen-pls",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "UTC",
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
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
                  "select" => {
                    "exist" => [
                      "dataset",
                      "format",
                      "timezone",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "records",
                    "1.0",
                    "download",
                  ],
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
