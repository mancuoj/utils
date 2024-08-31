import { isSafePort } from './is-safe-port'

describe('isSafePort', () => {
  it('should return true if the port is safe', () => {
    expect(isSafePort(3000)).toBe(true)
    expect(isSafePort(5000)).toBe(true)
    expect(isSafePort(8080)).toBe(true)
  })

  it('should return false if the port is unsafe', () => {
    expect(isSafePort(1)).toBe(false)
    expect(isSafePort(7)).toBe(false)
    expect(isSafePort(9)).toBe(false)
  })
})
