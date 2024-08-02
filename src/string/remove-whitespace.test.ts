import { describe, expect, it } from 'vitest'
import { removeWhitespace } from './remove-whitespace'

describe('removeWhitespace', () => {
  it('should remove all spaces from a string', () => {
    const input = 'This is a test string'
    const expected = 'Thisisateststring'
    expect(removeWhitespace(input)).toBe(expected)
  })

  it('should remove all tabs from a string', () => {
    const input = 'This\tis\ta\ttest\tstring'
    const expected = 'Thisisateststring'
    expect(removeWhitespace(input)).toBe(expected)
  })

  it('should remove all newlines from a string', () => {
    const input = 'This\nis\na\ntest\nstring'
    const expected = 'Thisisateststring'
    expect(removeWhitespace(input)).toBe(expected)
  })

  it('should remove all carriage returns from a string', () => {
    const input = 'This\r\nis\r\na\r\ntest\r\nstring'
    const expected = 'Thisisateststring'
    expect(removeWhitespace(input)).toBe(expected)
  })

  it('should remove mixed whitespace characters from a string', () => {
    const input = '  This is a \t test string \n with various \t whitespace characters.  '
    const expected = 'Thisisateststringwithvariouswhitespacecharacters.'
    expect(removeWhitespace(input)).toBe(expected)
  })

  it('should return an empty string when input is empty', () => {
    const input = ''
    const expected = ''
    expect(removeWhitespace(input)).toBe(expected)
  })

  it('should handle strings with no whitespace', () => {
    const input = 'ThisIsATestString'
    const expected = 'ThisIsATestString'
    expect(removeWhitespace(input)).toBe(expected)
  })
})
