
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ParkingStgallenSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ParkingStgallenSDK.test()
    equal(testsdk instanceof ParkingStgallenSDK, true,
      'ParkingStgallenSDK.test() must return a client synchronously')
  })

})
