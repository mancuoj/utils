import { isLength } from './is-length'

describe('isLength', () => {
  it('should return true for valid lengths', () => {
    expect(isLength(0)).toBe(true)
    expect(isLength(10)).toBe(true)
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true)
  })

  it('should return false for invalid lengths', () => {
    expect(isLength(-1)).toBe(false)
    expect(isLength(10.5)).toBe(false)
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
  })

  it('should return false for non-numbers', () => {
    expect(isLength('10')).toBe(false)
    expect(isLength(null)).toBe(false)
    expect(isLength(undefined)).toBe(false)
    expect(isLength({})).toBe(false)
    expect(isLength([])).toBe(false)
    expect(isLength(() => {})).toBe(false)
    expect(isLength(new Date())).toBe(false)
  })
})
