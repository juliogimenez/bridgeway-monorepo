export type Types =
  | 'array'
  | 'bigint'
  | 'boolean'
  | 'date'
  | 'function'
  | 'null'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'

interface AnyObject {
  [key: string]: unknown
}

type FunctionObject = {
  (...args: any[]): any
}

function kindOf() {
  const cache: { [key: string]: Types } = Object.create(null)
  return (thing: unknown): Types => {
    const str = Object.prototype.toString.call(thing)
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase() as Types)
  }
}

const getKeys = (o: unknown): string[] => {
  if (typeof o === 'object' && o !== null) {
    return Object.keys(o)
  } else {
    return []
  }
}
const isType = kindOf()

const isUndefined = (value: unknown): value is undefined =>
  value === undefined || value === 'undefined'

const isNull = (o: unknown): o is null => o === null

const isBoolean = (object: unknown): object is boolean =>
  typeof object === 'boolean'

const isDate = (object: unknown): object is Date => isType(object) === 'date'

const isString = function (str: unknown): boolean {
  return isType(str) === 'string'
}

const isNumeric = function (object: unknown): boolean {
  return (
    (typeof object === 'number' && isFinite(object)) ||
    (!isNaN(Number(object)) && (isString(object) || typeof object === 'number'))
  )
}

const isObject = function (o: unknown): o is AnyObject {
  return (
    typeof o === 'object' &&
    !isNull(o) &&
    !isUndefined(o) &&
    o.constructor &&
    Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  )
}

const isEmpty = (o: any): boolean => {
  if (isNull(o) || isUndefined(o)) return true
  if (isType(o) === 'object') return !getKeys(o).length
  if (isType(o) === 'string') return o.length === 0
  if (Array.isArray(o)) return o.length === 0
  return false
}
const isPlainObject = function (object: unknown): object is AnyObject {
  if (isType(object) !== 'object') {
    return false
  }
  const proto = Object.getPrototypeOf(object)
  return proto === Object.prototype || proto === null
}

const isPrimitive = (value: unknown): boolean => {
  return ['object', 'array', 'function'].indexOf(isType(value)) === -1
}

const isFunction = function (object: unknown): object is FunctionObject {
  return typeof object === 'function'
}

const isPromise = function <T>(obj: unknown): obj is Promise<T> {
  return obj instanceof Promise
}
export {
  isBoolean,
  isDate,
  isEmpty,
  isFunction,
  isNull,
  isNumeric,
  isObject,
  isPlainObject,
  isPrimitive,
  isPromise,
  isString,
  isType,
  isUndefined,
}
