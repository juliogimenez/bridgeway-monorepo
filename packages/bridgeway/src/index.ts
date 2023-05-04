import HttpHandler from './core/http-handler'
import { IBridgewayConfig, EndpointConfig } from './types'

class HttpRepository extends HttpHandler {
  constructor(config: IBridgewayConfig) {
    super(config)
  }

  createMethods(config: EndpointConfig[]) {}
}

export default HttpRepository
