// import { compile } from 'path-to-regexp'
// import {
//   isEmpty,
//   isNull,
//   isObject,
//   isUndefined,
//   isType,
// } from '../utils/type-checks.ts'
// import warn from '../utils/warn.ts'
// import checkObject from '../helpers/check-object.ts'
import { IBridgewayConfig } from '../types'
class HttpHandler {
  constructor(config: IBridgewayConfig) {}
  //
  //   createEndpointMethod(endpointConfig) {
  //     const missingConfigProperties = checkObject(endpointConfig, [
  //       'metadata',
  //       'method',
  //       'name',
  //       'route',
  //     ])
  //
  //     if (missingConfigProperties.length > 0) {
  //       this.missingMsg(missingConfigProperties)
  //     }
  //
  //     const { method, name, route, metadata } = endpointConfig
  //
  //     const missingMetadataProperties = checkObject(metadata, [
  //       'headers',
  //       'responseType',
  //     ])
  //
  //     if (missingMetadataProperties.length > 0) {
  //       this.missingMsg(missingMetadataProperties)
  //     }
  //
  //     const hasUrlParams = /:[^/]+/g.test(route)
  //     const hasMetadataQuery = !isEmpty(metadata.query)
  //     const hasMetadataBody = !isEmpty(metadata.body)
  //
  //     return async (requestConfig) => {
  //       if (!isObject(requestConfig) || isEmpty(requestConfig)) {
  //         warn(`'config' parameter is not a valid configuration object.`)
  //       }
  //
  //       const { params, query, body } = requestConfig
  //
  //       if (hasMetadataQuery) {
  //         const validationQueryError = this.validateParams(metadata.query, query)
  //         if (validationQueryError) {
  //           warn(`In the '${name}' method. ${validationQueryError}.`)
  //           return
  //         }
  //       }
  //       //
  //       if (hasMetadataBody) {
  //         const validationBodyError = this.validateParams(metadata.body, body)
  //         if (validationBodyError) {
  //           warn(`In the '${name}' method. ${validationBodyError}.`)
  //           return
  //         }
  //       }
  //
  //       const url = hasUrlParams ? compile(route)(params) : route
  //       const config = {
  //         ...(hasMetadataBody ? { data: body } : {}),
  //         ...(hasMetadataQuery ? { params: query } : {}),
  //         method,
  //         url,
  //       }
  //       console.log({ ...config })
  //     }
  //   }
  //
  //   validateParameter(value, options = {}) {
  //     const { isRequired = false, type = null } = options
  //     if (isRequired && isEmpty(param)) return 'is required'
  //     if (type && !this.validatePropertyType(value, type)) {
  //       return `must be a ${type.name}`
  //     }
  //     return null
  //   }
  //
  //   validateParams(schema, params = {}) {
  //     for (const [paramName, validation] of Object.entries(schema)) {
  //       const paramValue = params[paramName]
  //       const validationError = this.validateParameter(paramValue, validation)
  //       if (validationError) {
  //         return `The parameter '${paramName}' ${validationError}`
  //       }
  //     }
  //   }
  //
  //   validatePropertyType(value, type) {
  //     if (isNull(value) || isUndefined(value)) return true
  //     return isType(type)
  //   }
  //   missingMsg(missingProperties) {
  //     if (missingProperties.length > 0) {
  //       const missingMsg =
  //         missingProperties.length > 1
  //           ? `properties [${missingProperties.join(', ')}] are missing`
  //           : `property ['${missingProperties[0]}'] is missing`
  //       throw new Error(`The ${missingMsg} and are required in the object.`)
  //     }
  //   }
}

export default HttpHandler
