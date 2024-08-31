import { initial } from './initial'

describe('initial', () => {
  it('should return the initial elements of an array', () => {
    expect(initial([1, 2, 3])).toBe([1, 2])
    expect(initial([1])).toBe([])
    expect(initial([])).toBe([])
    expect(initial([1, 2, 3, 4, 5])).toBe([1, 2, 3, 4])
  })
})
