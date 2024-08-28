import { isRegExp } from './is-reg-exp'

describe('isRegExp', () => {
  it('should return true for RegExp', () => {
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('abc'))).toBeTruthy()
    expect(isRegExp(/abc/)).toBeTruthy()
    expect(isRegExp(/abc/g)).toBeTruthy()
    expect(isRegExp(/abc/i)).toBeTruthy()
    expect(isRegExp(/abc/u)).toBeTruthy()
    expect(isRegExp(/abc/y)).toBeTruthy()
  })

  it('should return false for non-RegExp', () => {
    expect(isRegExp('abc')).toBeFalsy()
    expect(isRegExp(42)).toBeFalsy()
    expect(isRegExp(null)).toBeFalsy()
    expect(isRegExp(undefined)).toBeFalsy()
    expect(isRegExp({})).toBeFalsy()
    expect(isRegExp([])).toBeFalsy()
  })
})
