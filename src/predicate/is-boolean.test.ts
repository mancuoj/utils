import { isBoolean } from './is-boolean'

describe('isBoolean', () => {
  it('should return true for boolean values', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it('should return false for non-boolean values', () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean(() => {})).toBe(false)
  })

  it('can be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, true, 4, false]
    const result = arr.filter(isBoolean)

    // Here the type of result is narrowed to `boolean[]`
    expect(result).toStrictEqual([true, false])
  })
})
