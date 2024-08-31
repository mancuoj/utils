import { isNil } from './is-nil'

describe('isNil', () => {
  it('should return true if the value is null or undefined', () => {
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
  })

  it('should return false if the value is not null nor undefined', () => {
    expect(isNil('')).toBe(false)
    expect(isNil(123)).toBe(false)
    expect(isNil({})).toBe(false)
    expect(isNil([])).toBe(false)
    expect(isNil(() => {})).toBe(false)
    expect(isNil(/abc/)).toBe(false)
    expect(isNil(new Date())).toBe(false)
    expect(isNil(new Error('test error'))).toBe(false)
  })

  it('should be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, null, 4, undefined]
    const result = arr.filter(isNil)

    // Here the type of result is narrowed to `null | undefined`
    expect(result).toStrictEqual([null, undefined])
  })
})
