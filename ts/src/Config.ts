
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ParkingStgallen',
        slug: "parking-stgallen",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://daten.stadt.sg.ch/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      parking_record: {
      },

    }
  }


  entity = {
    "parking_record": {
      "fields": [
        {
          "name": "datasetid",
          "short": "Dataset identifier",
          "type": "`$STRING`"
        },
        {
          "name": "fields",
          "type": "`$OBJECT`"
        },
        {
          "name": "geometry",
          "short": "GeoJSON geometry",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "record_timestamp",
          "short": "Record processing timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "recordid",
          "short": "Unique record identifier",
          "type": "`$STRING`"
        }
      ],
      "name": "parking_record",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "freie-parkplatze-in-der-stadt-stgallen-pls",
                    "kind": "query",
                    "name": "dataset",
                    "orig": "dataset",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "exclude_phid",
                    "orig": "exclude_phid",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "exclude_phname",
                    "orig": "exclude_phname",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "facet",
                    "orig": "facet",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_phid",
                    "orig": "refine_phid",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_phname",
                    "orig": "refine_phname",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "row",
                    "orig": "row",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "UTC",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/records/1.0/search/",
              "segments": [
                {
                  "lit": "records"
                },
                {
                  "lit": "1.0"
                },
                {
                  "lit": "search"
                }
              ],
              "select": {
                "exist": [
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
                  "timezone"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "records",
                "1.0",
                "search"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "freie-parkplatze-in-der-stadt-stgallen-pls",
                    "kind": "query",
                    "name": "dataset",
                    "orig": "dataset",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "UTC",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/records/1.0/download/",
              "segments": [
                {
                  "lit": "records"
                },
                {
                  "lit": "1.0"
                },
                {
                  "lit": "download"
                }
              ],
              "select": {
                "exist": [
                  "dataset",
                  "format",
                  "timezone"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "records",
                "1.0",
                "download"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

