import { isRegExp } from './is-reg-exp'

describe('isRegExp', () => {
  it('should return true for RegExp', () => {
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('abc'))).toBe(true)
    expect(isRegExp(/abc/)).toBe(true)
    expect(isRegExp(/abc/g)).toBe(true)
    expect(isRegExp(/abc/i)).toBe(true)
    expect(isRegExp(/abc/u)).toBe(true)
    expect(isRegExp(/abc/y)).toBe(true)
  })

  it('should return false for non-RegExp', () => {
    expect(isRegExp('abc')).toBe(false)
    expect(isRegExp(42)).toBe(false)
    expect(isRegExp(null)).toBe(false)
    expect(isRegExp(undefined)).toBe(false)
    expect(isRegExp({})).toBe(false)
    expect(isRegExp([])).toBe(false)
  })
})
