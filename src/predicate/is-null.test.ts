import { isNull } from './is-null'

describe('isNull', () => {
  it('should return true if the value is null', () => {
    expect(isNull(null)).toBeTruthy()
  })

  it('should return false if the value is not null', () => {
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull('')).toBeFalsy()
    expect(isNull(123)).toBeFalsy()
    expect(isNull({})).toBeFalsy()
    expect(isNull([])).toBeFalsy()
    expect(isNull(() => {})).toBeFalsy()
    expect(isNull(/abc/)).toBeFalsy()
    expect(isNull(new Date())).toBeFalsy()
    expect(isNull(new Error('test error'))).toBeFalsy()
  })

  it('should be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, null, 4, undefined]
    const result = arr.filter(isNull)

    // Here the type of result is narrowed to `null[]`
    expect(result).toStrictEqual([null])
  })
})
