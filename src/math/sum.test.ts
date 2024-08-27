import { sum } from './sum'

describe('sum', () => {
  it('should return the sum of all numbers in the array', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15)
    expect(sum([1, 2, 3])).toBe(6)
    expect(sum([-1, -2, 3])).toBe(0)
    expect(sum([])).toBe(0)
  })
})
