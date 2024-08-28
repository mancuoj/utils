import { isLength } from './is-length'

describe('isLength', () => {
  it('should return true for valid lengths', () => {
    expect(isLength(0)).toBeTruthy()
    expect(isLength(10)).toBeTruthy()
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBeTruthy()
  })

  it('should return false for invalid lengths', () => {
    expect(isLength(-1)).toBeFalsy()
    expect(isLength(10.5)).toBeFalsy()
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBeFalsy()
  })

  it('should return false for non-numbers', () => {
    expect(isLength('10')).toBeFalsy()
    expect(isLength(null)).toBeFalsy()
    expect(isLength(undefined)).toBeFalsy()
    expect(isLength({})).toBeFalsy()
    expect(isLength([])).toBeFalsy()
    expect(isLength(() => {})).toBeFalsy()
    expect(isLength(new Date())).toBeFalsy()
  })
})
