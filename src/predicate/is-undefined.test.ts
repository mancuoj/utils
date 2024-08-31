import { isUndefined } from './is-undefined'

describe('isUndefined', () => {
  it('returns true if the value is undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it('returns false if the value is not undefined', () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(123)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined(() => {})).toBe(false)
    expect(isUndefined(/abc/)).toBe(false)
    expect(isUndefined(new Date())).toBe(false)
    expect(isUndefined(new Error('test error'))).toBe(false)
  })

  it('can be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, null, 4, undefined]
    const result = arr.filter(isUndefined)

    // Here the type of result is narrowed to `undefined[]`.
    expect(result).toStrictEqual([undefined])
  })
})
