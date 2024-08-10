import { randomInteger } from './random-integer'

describe('randomInteger', () => {
  it('generates a random integer between 0 and max', () => {
    const result = randomInteger(10)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('generates a random integer between min and max (inclusive)', () => {
    const result = randomInteger(5, 10)
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('throws an error if min is greater than max', () => {
    expect(() => randomInteger(10, 5)).toThrowError('Minimum value cannot be greater than the maximum value.')
  })
})
