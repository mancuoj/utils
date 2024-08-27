import { sumBy } from './sum-by'

describe('sumBy', () => {
  it('should return 0 if the array is empty', () => {
    expect(sumBy([], x => x)).toBe(0)
  })

  it('should return the sum of the array of numbers', () => {
    expect(sumBy([1, 2, 3], x => x)).toBe(6)
    expect(sumBy([1, 2, 3], x => x * 2)).toBe(12)
    expect(sumBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a)).toBe(6)
  })
})
