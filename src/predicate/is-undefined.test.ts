import { isUndefined } from './is-undefined'

describe('isUndefined', () => {
  it('returns true if the value is undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
  })

  it('returns false if the value is not undefined', () => {
    expect(isUndefined(null)).toBeFalsy()
    expect(isUndefined('')).toBeFalsy()
    expect(isUndefined(123)).toBeFalsy()
    expect(isUndefined({})).toBeFalsy()
    expect(isUndefined([])).toBeFalsy()
    expect(isUndefined(() => {})).toBeFalsy()
    expect(isUndefined(/abc/)).toBeFalsy()
    expect(isUndefined(new Date())).toBeFalsy()
    expect(isUndefined(new Error('test error'))).toBeFalsy()
  })

  it('can be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, null, 4, undefined]
    const result = arr.filter(isUndefined)

    // Here the type of result is narrowed to `undefined[]`.
    expect(result).toStrictEqual([undefined])
  })
})
