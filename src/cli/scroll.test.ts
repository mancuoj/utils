import { scroll } from './scroll'

describe('scroll', () => {
  it('should return the correct escape code', () => {
    expect(scroll.up()).toBe('\x1B[S')
    expect(scroll.down()).toBe('\x1B[T')
    expect(scroll.up(2)).toBe('\x1B[S\x1B[S')
    expect(scroll.down(2)).toBe('\x1B[T\x1B[T')
  })
})
