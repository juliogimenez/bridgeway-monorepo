export declare enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
}
/**
 * Configuración para una endpoint
 */
export interface EndpointConfig {
  method: HttpMethod
  path: string
  name: string
  metadata: EndpointMetadata
}

/**
 * Metadatos para una endpoint
 */
export interface EndpointMetadata {
  description?: string
  body?: Record<string, BodyField>
  headers?: Record<string, boolean>
  responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer'
  queryParams?: Record<string, QueryParamField>
}

/**
 * Descripción de un campo del cuerpo
 */
export interface BodyField {
  isRequired: boolean
  type:
    | 'string'
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'date'
    | 'dateTime'
    | 'currency'
    | 'phone'
    | 'email'
    | 'url'
  inputFormat?: string
  outputFormat?: string
}

/**
 * Descripción de un parámetro de consulta
 */
export interface QueryParamField {
  isRequired: boolean
  type:
    | 'string'
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'date'
    | 'dateTime'
    | 'currency'
    | 'phone'
    | 'email'
    | 'url'
  inputFormat?: string
  outputFormat?: string
}

/**
 * Opciones para realizar una petición HTTP
 */
export interface FetchOptions {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: any
  signal?: AbortSignal
  mode?: 'cors' | 'no-cors' | 'same-origin'
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached'
}

/**
 * Configuración para realizar peticiones HTTP
 */
export interface IBridgewayConfig extends FetchOptions {
  baseURL: string
}
