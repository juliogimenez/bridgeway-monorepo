import { describe, expect, test } from 'vitest'
import {
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
} from '../../src/utils/type-checks'

describe('Test cases for type functions', () => {
  test('isType should recognize typeof values', () => {
    expect(isType(true)).toEqual('boolean')
    expect(isType(() => {})).toEqual('function')
    expect(isType('hello world')).toEqual('string')
  })

  test('isBoolean should recognize boolean values', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean('false')).toBe(false)
  })

  test('isDate should recognize date values', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date('2023-02-22'))).toBe(true)
    expect(isDate('2023-02-22T22:03:10:3333')).toBe(false)
    expect(isDate('2023/02/22')).toBe(false)
  })

  test('isEmpty should recognize empty values', () => {
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(new Date())).toBe(false)
  })

  test('isFunction should recognize function values', () => {
    expect(isFunction(isFunction)).toBe(true)
    expect(isFunction([].length)).toBe(false)
  })

  test('isNull should recognize null values', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull('')).toBe(false)
  })

  test('isNumeric should recognize numeric values', () => {
    expect(isNumeric(42)).toBe(true)
    expect(isNumeric(3.14)).toBe(true)
    expect(isNumeric(-10)).toBe(true)
    expect(isNumeric('123')).toBe(true)
    expect(isNumeric('hola')).toBe(false)
    expect(isNumeric('1.23')).toBe(true)
    expect(isNumeric('1.23')).toBe(true)
    expect(isNumeric({ a: 1 })).toBe(false)
    expect(isNumeric(true)).toBe(false)
    expect(isNumeric(null)).toBe(false)
  })

  test('isObject should recognize object values', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1, b: 2 })).toBe(true)
    expect(isObject({})).toBe(true)
    expect(isObject(42)).toBe(false)
    expect(isObject('hello')).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject([])).toBe(false)
    expect(isObject(new Date())).toBe(false)
  })

  test('isPlainObject should recognize object values', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ name: 'John', age: 30 })).toBe(true)
    expect(isPlainObject({ name: 'John', address: {} })).toBe(true)
    const Person = function (name: string, age: number) {
      this.name = name
      this.age = age
    }
    const personObj = new Person('John', 30)
    expect(isPlainObject(personObj)).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(undefined)).toBe(false)
    expect(isPlainObject('This is a string')).toBe(false)
    const customProto = { a: 1 }
    const objWithCustomProto = Object.create(customProto)
    expect(isPlainObject(objWithCustomProto)).toBe(false)
    expect(isPlainObject(Object.create(null))).toBe(true)
    expect(isPlainObject({ name: undefined })).toBe(true)
  })

  test('isPrimitive should recognize object values', () => {
    expect(isPrimitive(123)).toBe(true)
    expect(isPrimitive('hello world')).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
    expect(isPrimitive({ name: 'John', age: 30 })).toBe(false)
    expect(isPrimitive([1, 2, 3])).toBe(false)
    expect(isPrimitive(() => {})).toBe(false)
    expect(isPrimitive(new Date())).toBe(true)
    expect(isPrimitive(/hello/)).toBe(true)
  })

  test('isPromise should recognize promise values', () => {
    expect(isPromise(Promise.resolve('foo'))).toBe(true)
    expect(isPromise({ then: () => {} })).toBe(false)
    expect(isPromise(undefined)).toBe(false)
    expect(isPromise({ foo: 'bar' })).toBe(false)
    expect(isPromise({ then: () => {}, catch: () => {} })).toBe(false)
  })

  test('isString should recognize string values', () => {
    expect(isString('foo')).toBe(true)
    expect(isString(123)).toBe(false)
  })

  test('isUndefined should recognize undefined values', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined('undefined')).toBe(true)
    expect(isUndefined(null)).toBe(false)
  })
})
