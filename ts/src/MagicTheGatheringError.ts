
import { Context } from './Context'


class MagicTheGatheringError extends Error {

  isMagicTheGatheringError = true

  sdk = 'MagicTheGathering'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MagicTheGatheringError
}

