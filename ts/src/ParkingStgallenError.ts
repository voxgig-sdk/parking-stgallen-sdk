
import { Context } from './Context'


class ParkingStgallenError extends Error {

  isParkingStgallenError = true

  sdk = 'ParkingStgallen'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ParkingStgallenError
}

