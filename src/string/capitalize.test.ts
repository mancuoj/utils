import { capitalize } from './capitalize'

describe('capitalize', () => {
  it('should convert the first character of a string to uppercase and the remaining to lowercase', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('Hello')).toBe('Hello')
    expect(capitalize('HELLO')).toBe('Hello')
    expect(capitalize('hello-world')).toBe('Hello-world')
    expect(capitalize('')).toBe('')
    expect(capitalize('    hello')).toBe('    hello')
  })
})
