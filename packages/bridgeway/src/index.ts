import HttpHandler from './core/http-handler'
import { IBridgewayConfig } from './types'
import checkObject from './helpers/check-object'

console.log(checkObject({ name: 'john', age: 38 }, ['name', 'age']))
class HttpRepository extends HttpHandler {
  constructor(config: IBridgewayConfig) {
    super(config)
  }

  createMethods(config: object) {}
}

export default HttpRepository
