# ParkingStgallen SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ParkingStgallen",
            "slug": "parking-stgallen",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://daten.stadt.sg.ch/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "parking_record": {},
            },
        },
        "entity": {
      "parking_record": {
        "fields": [
          {
            "name": "datasetid",
            "title": "Datasetid",
            "type": "`$STRING`",
            "short": "Dataset identifier",
          },
          {
            "name": "fields",
            "title": "Fields",
            "type": "`$OBJECT`",
          },
          {
            "name": "geometry",
            "title": "Geometry",
            "type": "`$OBJECT`",
            "short": "GeoJSON geometry",
          },
          {
            "name": "record_timestamp",
            "title": "Record Timestamp",
            "type": "`$STRING`",
            "short": "Record processing timestamp",
            "format": "date-time",
          },
          {
            "name": "recordid",
            "title": "Recordid",
            "type": "`$STRING`",
            "short": "Unique record identifier",
          },
        ],
        "name": "parking_record",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/records/1.0/search/",
                "segments": [
                  {
                    "lit": "records",
                  },
                  {
                    "lit": "1.0",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "records",
                  "1.0",
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dataset",
                      "orig": "dataset",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "freie-parkplatze-in-der-stadt-stgallen-pls",
                    },
                    {
                      "name": "exclude_phid",
                      "orig": "exclude_phid",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "exclude_phname",
                      "orig": "exclude_phname",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "facet",
                      "orig": "facet",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "de",
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_phid",
                      "orig": "refine_phid",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_phname",
                      "orig": "refine_phname",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "row",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "UTC",
                    },
                  ],
                },
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
                    "timezone",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/records/1.0/download/",
                "segments": [
                  {
                    "lit": "records",
                  },
                  {
                    "lit": "1.0",
                  },
                  {
                    "lit": "download",
                  },
                ],
                "parts": [
                  "records",
                  "1.0",
                  "download",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dataset",
                      "orig": "dataset",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "freie-parkplatze-in-der-stadt-stgallen-pls",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "UTC",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dataset",
                    "format",
                    "timezone",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
