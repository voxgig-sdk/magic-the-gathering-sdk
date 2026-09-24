

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MagicTheGatheringSDK, BaseFeature, stdutil } from '../../..'

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


describe('SetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAGIC_THE_GATHERING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAGIC_THE_GATHERING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MagicTheGatheringSDK.test()
    const ent = testsdk.Set()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAGIC_THE_GATHERING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'set.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"block":{"a":true,"h":"Block","n":"block","r":false,"sh":"Block the set belongs to","t":"`$STRING`","key$":"block","index$":0},"booster":{"a":true,"h":"Booster","n":"booster","r":false,"sh":"Booster pack configuration","t":"`$ARRAY`","key$":"booster","index$":1},"border":{"a":true,"h":"Border","n":"border","r":false,"sh":"Border style of cards in the set","t":"`$STRING`","key$":"border","index$":2},"code":{"a":true,"h":"Code","n":"code","r":false,"sh":"Unique set code","t":"`$STRING`","key$":"code","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the set","t":"`$STRING`","key$":"name","index$":4},"onlineOnly":{"a":true,"h":"Online Only","n":"onlineOnly","r":false,"sh":"Whether the set is online-only","t":"`$BOOLEAN`","key$":"onlineOnly","index$":5},"releaseDate":{"a":true,"fo":"date","h":"Release Date","n":"releaseDate","r":false,"sh":"Release date of the set","t":"`$STRING`","key$":"releaseDate","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of the set (e.g., core, expansion)","t":"`$STRING`","key$":"type","index$":7}},"name":"set","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /sets","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"block","or":"block","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/sets","q":{"exist":["block","name"]},"r":{},"s":[{"lit":"sets"}],"t":{"req":"`reqdata`","res":"`body.sets`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"set","name__orig":"set","Name":"Set","name_":"set","name-":"set","NAME":"SET","index$":1}, {"active":true,"entity":"set","key$":"BasicSetFlow","kind":"basic","name":"BasicSetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"set_ref01"}}],"index$":0}]}, 'Set', {"GET /sets":{"protocol":"http","operationId":"getSets","responses":{"200":{"description":"Successful response with list of sets","content":{"application/json":{"schema":{"type":"object","properties":{"sets":{"items":{"properties":{"block":{"description":"Block the set belongs to","type":"string","key$":"block"},"booster":{"description":"Booster pack configuration","items":{"type":"string"},"type":"array","key$":"booster"},"border":{"description":"Border style of cards in the set","type":"string","key$":"border"},"code":{"description":"Unique set code","type":"string","key$":"code"},"name":{"description":"Name of the set","type":"string","key$":"name"},"onlineOnly":{"description":"Whether the set is online-only","type":"boolean","key$":"onlineOnly"},"releaseDate":{"description":"Release date of the set","format":"date","type":"string","key$":"releaseDate"},"type":{"description":"Type of the set (e.g., core, expansion)","type":"string","key$":"type"}},"type":"object","x-ref":"#/components/schemas/Set","index$":0},"key$":"sets","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters"},"500":{"description":"Internal server error"}},"parameters":[{"name":"name","in":"query","description":"Filter sets by name","required":false,"schema":{"type":"string"},"index$":0},{"name":"block","in":"query","description":"Filter sets by block name","required":false,"schema":{"type":"string"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let set_ref01_data = Object.values(setup.data.existing.set)[0] as any

    // LIST
    const set_ref01_ent = client.Set()
    const set_ref01_match: any = {}

    const set_ref01_list = (await set_ref01_ent.list(set_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/set/SetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MagicTheGatheringSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['set01','set02','set03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAGIC_THE_GATHERING_TEST_SET_ENTID': idmap,
    'MAGIC_THE_GATHERING_TEST_LIVE': 'FALSE',
    'MAGIC_THE_GATHERING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MAGIC_THE_GATHERING_TEST_SET_ENTID']

  const live = 'TRUE' === env.MAGIC_THE_GATHERING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAGIC_THE_GATHERING_TEST_SET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MagicTheGatheringSDK(merge([
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
    explain: 'TRUE' === env.MAGIC_THE_GATHERING_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
