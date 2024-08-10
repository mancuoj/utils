import { gcd } from './gcd'

describe('gcd', () => {
  it('should return the GCD of two numbers', () => {
    expect(gcd(48, 18)).toBe(6)
    expect(gcd(56, 98)).toBe(14)
    expect(gcd(-48, -18)).toBe(6)
    expect(gcd(-56, -98)).toBe(14)
    expect(gcd(48, -18)).toBe(6)
    expect(gcd(-56, 98)).toBe(14)
    expect(gcd(0, 18)).toBe(18)
    expect(gcd(56, 0)).toBe(56)
    expect(gcd(0, 0)).toBe(0)
  })
})
