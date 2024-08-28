import { isFunction } from './is-function'

describe('isFunction', () => {
  it('should return true for functions', () => {
    expect(isFunction(async () => {})).toBeTruthy()
    expect(isFunction(function* () {})).toBeTruthy()
    expect(isFunction(Array.prototype.slice)).toBeTruthy()
    expect(isFunction(Proxy)).toBeTruthy()
    expect(isFunction(Int8Array)).toBeTruthy()
  })

  it('should return false for non-functions', () => {
    expect(isFunction(null)).toBeFalsy()
    expect(isFunction(undefined)).toBeFalsy()
    expect(isFunction(0)).toBeFalsy()
    expect(isFunction('')).toBeFalsy()
    expect(isFunction(true)).toBeFalsy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction([])).toBeFalsy()
  })
})
