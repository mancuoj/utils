import { head } from './head'

describe('head', () => {
  it('returns the first element of an array or undefined if the array is empty', () => {
    expect(head([1, 2, 3])).toBe(1)
    expect(head(['a', 'b', 'c'])).toBe('a')
    expect(head([true, false, true])).toBeTruthy()
    expect(head([])).toBeUndefined()
  })
})
