import { describe, expect, test } from 'vitest'
import checkObject from '../../src/helpers/check-object'

describe('check object properties required is missing', () => {
  test('check properties required', () => {
    const arr = checkObject({}, ['name', 'age'])
    expect(arr).toBeInstanceOf(Array)
    expect(arr).toHaveLength(2)
  })
})

describe('check object properties required inside object', () => {
  test('check properties required', () => {
    const arr = checkObject({ name: 'john', age: 38 }, ['name', 'age'])
    expect(arr).toBeInstanceOf(Array)
    expect(arr).toHaveLength(0)
  })
})
