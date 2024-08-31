import { isFunction } from './is-function'

describe('isFunction', () => {
  it('should return true for functions', () => {
    expect(isFunction(async () => {})).toBe(true)
    expect(isFunction(function* () {})).toBe(true)
    expect(isFunction(Array.prototype.slice)).toBe(true)
    expect(isFunction(Proxy)).toBe(true)
    expect(isFunction(Int8Array)).toBe(true)
  })

  it('should return false for non-functions', () => {
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
    expect(isFunction(0)).toBe(false)
    expect(isFunction('')).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction([])).toBe(false)
  })
})
