
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ParkingStgallen',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "fields",
          "type": "`$OBJECT`"
        },
        {
          "name": "geometry",
          "type": "`$OBJECT`"
        },
        {
          "name": "record_timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "recordid",
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
              "parts": [
                "records",
                "1.0",
                "search"
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
              }
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
              "parts": [
                "records",
                "1.0",
                "download"
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
              }
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
  config
}

