import { randomInt } from './random-int'

describe('randomInt', () => {
  it('should return a random integer between 0 and the given number', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(5)
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThan(5)
      expect(Number.isInteger(result)).toBeTruthy()
    }
  })

  it('should return a random integer between the given range', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(-5, 5)
      expect(result).toBeGreaterThanOrEqual(-5)
      expect(result).toBeLessThan(5)
      expect(Number.isInteger(result)).toBeTruthy()
    }
  })

  it('should throw an error if the maximum value is less than the minimum value', () => {
    expect(() => randomInt(5, 1)).toThrowError()
    expect(() => randomInt(5, 5)).toThrowError()
  })
})
