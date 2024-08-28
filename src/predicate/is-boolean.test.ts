import { isBoolean } from './is-boolean'

describe('isBoolean', () => {
  it('should return true for boolean values', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()
  })

  it('should return false for non-boolean values', () => {
    expect(isBoolean(0)).toBeFalsy()
    expect(isBoolean('true')).toBeFalsy()
    expect(isBoolean(null)).toBeFalsy()
    expect(isBoolean(undefined)).toBeFalsy()
    expect(isBoolean({})).toBeFalsy()
    expect(isBoolean([])).toBeFalsy()
    expect(isBoolean(() => {})).toBeFalsy()
  })

  it('can be used with TypeScript as a type predicate', () => {
    const arr = [1, 2, true, 4, false]
    const result = arr.filter(isBoolean)

    // Here the type of result is narrowed to `boolean[]`
    expect(result).toStrictEqual([true, false])
  })
})
