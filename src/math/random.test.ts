import { random } from './random'

describe('random', () => {
  it('should return a random number between 0 and the given number', () => {
    for (let i = 0; i < 100; i++) {
      const result = random(5)
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThan(5)
    }
  })

  it('should return a random number between the given range', () => {
    for (let i = 0; i < 100; i++) {
      const result = random(-5, 5)
      expect(result).toBeGreaterThanOrEqual(-5)
      expect(result).toBeLessThan(5)
    }
  })

  it('should throw an error if the maximum value is less than the minimum value', () => {
    expect(() => random(5, 1)).toThrowError()
    expect(() => random(5, 5)).toThrowError()
  })
})
