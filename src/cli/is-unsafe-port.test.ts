import { isUnsafePort } from './is-unsafe-port'

describe('isUnsafePort', () => {
  it('should return true if the port is safe', () => {
    expect(isUnsafePort(1)).toBe(true)
    expect(isUnsafePort(7)).toBe(true)
    expect(isUnsafePort(9)).toBe(true)
  })

  it('should return false if the port is unsafe', () => {
    expect(isUnsafePort(3000)).toBe(false)
    expect(isUnsafePort(5000)).toBe(false)
    expect(isUnsafePort(8080)).toBe(false)
  })
})
