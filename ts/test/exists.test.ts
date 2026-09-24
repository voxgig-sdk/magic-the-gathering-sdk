
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MagicTheGatheringSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MagicTheGatheringSDK.test()
    equal(testsdk instanceof MagicTheGatheringSDK, true,
      'MagicTheGatheringSDK.test() must return a client synchronously')
  })

})
