import { initial } from './initial'

describe('initial', () => {
  it('should return the initial elements of an array', () => {
    expect(initial([1, 2, 3])).toStrictEqual([1, 2])
    expect(initial([1])).toStrictEqual([])
    expect(initial([])).toStrictEqual([])
    expect(initial([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4])
  })
})
