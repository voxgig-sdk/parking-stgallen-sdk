# ParkingStgallen SDK configuration

module ParkingStgallenConfig
  def self.make_config
    {
      "main" => {
        "name" => "ParkingStgallen",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://daten.stadt.sg.ch/api",
        "auth" => {
          "prefix" => "Bearer",
        },
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
              "active" => true,
              "name" => "datasetid",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "field",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "geometry",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "record_timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "recordid",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
          ],
          "name" => "parking_record",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "freie-parkplatze-in-der-stadt-stgallen-pls",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "exclude_phid",
                        "orig" => "exclude_phid",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "exclude_phname",
                        "orig" => "exclude_phname",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "facet",
                        "orig" => "facet",
                        "reqd" => false,
                        "type" => "`$ARRAY`",
                      },
                      {
                        "active" => true,
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "de",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "refine_phid",
                        "orig" => "refine_phid",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "refine_phname",
                        "orig" => "refine_phname",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 10,
                        "kind" => "query",
                        "name" => "row",
                        "orig" => "row",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start",
                        "orig" => "start",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => "UTC",
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/records/1.0/search/",
                  "parts" => [
                    "records",
                    "1.0",
                    "search",
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
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "freie-parkplatze-in-der-stadt-stgallen-pls",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "UTC",
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/records/1.0/download/",
                  "parts" => [
                    "records",
                    "1.0",
                    "download",
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
                  "index$" => 0,
                },
              ],
              "key$" => "load",
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
