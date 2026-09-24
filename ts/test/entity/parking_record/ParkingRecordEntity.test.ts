

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ParkingStgallenSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ParkingRecordEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PARKING_STGALLEN_TEST_LIVE=TRUE.
  afterEach(liveDelay('PARKING_STGALLEN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ParkingStgallenSDK.test()
    const ent = testsdk.ParkingRecord()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PARKING_STGALLEN_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'parking_record.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"datasetid":{"a":true,"h":"Datasetid","n":"datasetid","r":false,"sh":"Dataset identifier","t":"`$STRING`","key$":"datasetid","index$":0},"fields":{"a":true,"h":"Fields","n":"fields","r":false,"t":"`$OBJECT`","key$":"fields","index$":1},"geometry":{"a":true,"h":"Geometry","n":"geometry","r":false,"sh":"GeoJSON geometry","t":"`$OBJECT`","key$":"geometry","index$":2},"record_timestamp":{"a":true,"fo":"date-time","h":"Record Timestamp","n":"record_timestamp","r":false,"sh":"Record processing timestamp","t":"`$STRING`","key$":"record_timestamp","index$":3},"recordid":{"a":true,"h":"Recordid","n":"recordid","r":false,"sh":"Unique record identifier","t":"`$STRING`","key$":"recordid","index$":4}},"name":"parking_record","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /records/1.0/search/","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"freie-parkplatze-in-der-stadt-stgallen-pls","k":"query","n":"dataset","or":"dataset","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"exclude_phid","or":"exclude_phid","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"exclude_phname","or":"exclude_phname","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"facet","or":"facet","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"refine_phid","or":"refine_phid","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"refine_phname","or":"refine_phname","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":10,"k":"query","n":"row","or":"row","r":false,"t":"`$INTEGER`","index$":9},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":0,"k":"query","n":"start","or":"start","r":false,"t":"`$INTEGER`","index$":11},{"a":true,"ex":"UTC","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":12}]},"k":"http","m":"GET","o":"/records/1.0/search/","q":{"exist":["dataset","exclude_phid","exclude_phname","facet","format","lang","q","refine_phid","refine_phname","row","sort","start","timezone"]},"r":{},"s":[{"lit":"records"},{"lit":"1.0"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /records/1.0/download/","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"freie-parkplatze-in-der-stadt-stgallen-pls","k":"query","n":"dataset","or":"dataset","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"UTC","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/records/1.0/download/","q":{"exist":["dataset","format","timezone"]},"r":{},"s":[{"lit":"records"},{"lit":"1.0"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"parking_record","name__orig":"parking_record","Name":"ParkingRecord","name_":"parking_record","name-":"parking-record","NAME":"PARKING_RECORD","index$":0}, {"active":true,"entity":"parking_record","key$":"BasicParkingRecordFlow","kind":"basic","name":"BasicParkingRecordFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"parking_record_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"parking_record_ref01","srcdatavar":"parking_record_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-parking_record_ref01"}}],"index$":1}]}, 'ParkingRecord', {"GET /records/1.0/search/":{"protocol":"http","operationId":"searchParkingRecords","responses":{"200":{"description":"Successful response with parking records","content":{"application/json":{"schema":{"type":"object","properties":{"nhits":{"description":"Total number of matching records","key$":"nhits","type":"integer"},"parameters":{"description":"Query parameters used for the search","key$":"parameters","type":"object"},"records":{"items":{"properties":{"datasetid":{"description":"Dataset identifier","type":"string","key$":"datasetid"},"fields":{"properties":{"free":{"description":"Number of free parking spaces","type":"integer"},"geo_point_2d":{"description":"Geographic coordinates [lat, lon]","items":{"type":"number"},"type":"array"},"open":{"description":"Whether the parking house is open","type":"boolean"},"phid":{"description":"Parking house ID","type":"string"},"phname":{"description":"Parking house name","type":"string"},"shortfree":{"description":"Number of available short-term parking spaces","type":"integer"},"timestamp":{"description":"Timestamp of the data","format":"date-time","type":"string"},"total":{"description":"Total number of parking spaces","type":"integer"}},"type":"object","key$":"fields"},"geometry":{"description":"GeoJSON geometry","type":"object","key$":"geometry"},"record_timestamp":{"description":"Record processing timestamp","format":"date-time","type":"string","key$":"record_timestamp"},"recordid":{"description":"Unique record identifier","type":"string","key$":"recordid"}},"type":"object","index$":0},"key$":"records","type":"array"},"facet_groups":{"description":"Facet results if faceting was requested","items":{"type":"object"},"key$":"facet_groups","type":"array"}}}},"text/csv":{"schema":{"type":"string","description":"CSV formatted parking records"}},"application/geo+json":{"schema":{"type":"object","description":"GeoJSON formatted parking records"}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"404":{"description":"Dataset not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}}},"parameters":[{"name":"dataset","in":"query","required":true,"description":"Dataset identifier","schema":{"type":"string","default":"freie-parkplatze-in-der-stadt-stgallen-pls"},"index$":0},{"name":"q","in":"query","required":false,"description":"Full-text search query","schema":{"type":"string"},"index$":1},{"name":"rows","in":"query","required":false,"description":"Number of results to return (max 100)","schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":2},{"name":"start","in":"query","required":false,"description":"Index of the first result to return (for pagination)","schema":{"type":"integer","default":0,"minimum":0},"index$":3},{"name":"sort","in":"query","required":false,"description":"Sort order (field name, optionally prefixed with - for descending order)","schema":{"type":"string"},"index$":4},{"name":"facet","in":"query","required":false,"description":"Field(s) to facet on (can be used multiple times)","schema":{"type":"array","items":{"type":"string","enum":["phid","phname"]}},"explode":true,"index$":5},{"name":"refine.phid","in":"query","required":false,"description":"Filter by parking house ID","schema":{"type":"string"},"index$":6},{"name":"refine.phname","in":"query","required":false,"description":"Filter by parking house name","schema":{"type":"string"},"index$":7},{"name":"exclude.phid","in":"query","required":false,"description":"Exclude specific parking house ID","schema":{"type":"string"},"index$":8},{"name":"exclude.phname","in":"query","required":false,"description":"Exclude specific parking house name","schema":{"type":"string"},"index$":9},{"name":"format","in":"query","required":false,"description":"Response format","schema":{"type":"string","enum":["json","csv","geojson"],"default":"json"},"index$":10},{"name":"timezone","in":"query","required":false,"description":"Timezone for date/time fields","schema":{"type":"string","default":"UTC"},"index$":11},{"name":"lang","in":"query","required":false,"description":"Language for results","schema":{"type":"string","enum":["de","en","it"],"default":"de"},"index$":12}],"securitySource":"unspecified"},"GET /records/1.0/download/":{"protocol":"http","operationId":"downloadParkingRecords","responses":{"200":{"description":"Successful download","content":{"application/json":{"schema":{"type":"object","description":"Complete dataset in JSON format"}},"text/csv":{"schema":{"type":"string","description":"Complete dataset in CSV format"}},"application/geo+json":{"schema":{"type":"object","description":"Complete dataset in GeoJSON format"}},"application/zip":{"schema":{"type":"string","format":"binary","description":"Complete dataset in Shapefile format (zipped)"}}}},"400":{"description":"Bad request - invalid parameters"},"404":{"description":"Dataset not found"}},"parameters":[{"name":"dataset","in":"query","required":true,"description":"Dataset identifier","schema":{"type":"string","default":"freie-parkplatze-in-der-stadt-stgallen-pls"},"index$":0},{"name":"format","in":"query","required":false,"description":"Download format","schema":{"type":"string","enum":["json","csv","geojson","shp"],"default":"json"},"index$":1},{"name":"timezone","in":"query","required":false,"description":"Timezone for date/time fields","schema":{"type":"string","default":"UTC"},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let parking_record_ref01_data = Object.values(setup.data.existing.parking_record)[0] as any

    // LIST
    const parking_record_ref01_ent = client.ParkingRecord()
    const parking_record_ref01_match: any = {}

    const parking_record_ref01_list = (await parking_record_ref01_ent.list(parking_record_ref01_match)).map((e: any) => e.data())


    // LOAD
    const parking_record_ref01_match_dt0: any = {}
    const parking_record_ref01_data_dt0 = (await parking_record_ref01_ent.load(parking_record_ref01_match_dt0)).data()
    assert(null != parking_record_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/parking_record/ParkingRecordTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ParkingStgallenSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['parking_record01','parking_record02','parking_record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PARKING_STGALLEN_TEST_PARKING_RECORD_ENTID': idmap,
    'PARKING_STGALLEN_TEST_LIVE': 'FALSE',
    'PARKING_STGALLEN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PARKING_STGALLEN_TEST_PARKING_RECORD_ENTID']

  const live = 'TRUE' === env.PARKING_STGALLEN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PARKING_STGALLEN_TEST_PARKING_RECORD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ParkingStgallenSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PARKING_STGALLEN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
