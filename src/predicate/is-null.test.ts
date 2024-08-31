import { isNull } from './is-null'

describe('isNull', () => {
  it('should return true if the value is null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('should return false if the value is not null', () => {
    expect(isNull(undefined)).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull(123)).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull(() => {})).toBe(false)
    expect(isNull(/abc/)).toBe(false)
    expect(isNull(new Date())).toBe(false)
    expect(isNull(new Error('test error'))).toBe(false)
  })

  it('should be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, null, 4, undefined]
    const result = arr.filter(isNull)

    // Here the type of result is narrowed to `null[]`
    expect(result).toStrictEqual([null])
  })
})
