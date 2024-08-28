import { isNil } from './is-nil'

describe('isNil', () => {
  it('should return true if the value is null or undefined', () => {
    expect(isNil(null)).toBeTruthy()
    expect(isNil(undefined)).toBeTruthy()
  })

  it('should return false if the value is not null nor undefined', () => {
    expect(isNil('')).toBeFalsy()
    expect(isNil(123)).toBeFalsy()
    expect(isNil({})).toBeFalsy()
    expect(isNil([])).toBeFalsy()
    expect(isNil(() => {})).toBeFalsy()
    expect(isNil(/abc/)).toBeFalsy()
    expect(isNil(new Date())).toBeFalsy()
    expect(isNil(new Error('test error'))).toBeFalsy()
  })

  it('should be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, null, 4, undefined]
    const result = arr.filter(isNil)

    // Here the type of result is narrowed to `null | undefined`
    expect(result).toStrictEqual([null, undefined])
  })
})
