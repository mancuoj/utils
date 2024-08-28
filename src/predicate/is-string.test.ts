import { isString } from './is-string'

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('hello')).toBeTruthy()
    expect(isString('')).toBeTruthy()
    expect(isString(String('hello'))).toBeTruthy()
  })

  it('should return false for non-strings', () => {
    expect(isString(null)).toBeFalsy()
    expect(isString(undefined)).toBeFalsy()
    expect(isString(123)).toBeFalsy()
    expect(isString({})).toBeFalsy()
    expect(isString([])).toBeFalsy()
    expect(isString(() => {})).toBeFalsy()
    expect(isString(new Date())).toBeFalsy()
    expect(isString(new Error('test error'))).toBeFalsy()
  })

  it('should be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, 'hello', 4, null]
    const result = arr.filter(isString)

    // Here the type of result is narrowed to `string[]`
    expect(result).toStrictEqual(['hello'])
  })
})
