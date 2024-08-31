import { tail } from './tail'

describe('tail', () => {
  it('returns all elements except the first', () => {
    expect(tail([1, 2, 3])).toStrictEqual([2, 3])
    expect(tail([true, false, true])).toStrictEqual([false, true])
    expect(tail([1])).toStrictEqual([])
    expect(tail([])).toStrictEqual([])
  })
})
