import { upperFirst } from './upper-first'

describe('upperFirst', () => {
  it('should convert the first character of a string to uppercase', () => {
    expect(upperFirst('hello')).toBe('Hello')
    expect(upperFirst('Hello')).toBe('Hello')
    expect(upperFirst('HELLO')).toBe('HELLO')
    expect(upperFirst('')).toBe('')
    expect(upperFirst('    hello')).toBe('    hello')
  })
})
