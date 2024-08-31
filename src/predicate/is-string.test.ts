import { isString } from './is-string'

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('hello')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString(String('hello'))).toBe(true)
  })

  it('should return false for non-strings', () => {
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(123)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(() => {})).toBe(false)
    expect(isString(new Date())).toBe(false)
    expect(isString(new Error('test error'))).toBe(false)
  })

  it('should be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, 'hello', 4, null]
    const result = arr.filter(isString)

    // Here the type of result is narrowed to `string[]`
    expect(result).toStrictEqual(['hello'])
  })
})
