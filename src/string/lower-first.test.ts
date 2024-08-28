import { lowerFirst } from './lower-first'

describe('lowerFirst', () => {
  it('should convert the first character of a string to lowercase', () => {
    expect(lowerFirst('hello')).toBe('hello')
    expect(lowerFirst('Hello')).toBe('hello')
    expect(lowerFirst('HELLO')).toBe('hELLO')
    expect(lowerFirst('')).toBe('')
    expect(lowerFirst('    hello')).toBe('    hello')
  })
})
