import { last } from './last'

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3)
    expect(last(['a', 'b', 'c'])).toBe('c')
    expect(last([true, false, true])).toBe(true)
    expect(last([])).toBeUndefined()
  })
})
