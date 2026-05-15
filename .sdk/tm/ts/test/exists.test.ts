
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ParkingStgallenSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ParkingStgallenSDK.test()
    equal(null !== testsdk, true)
  })

})
