import { upperCase } from './upper-case'

describe('upperCase', () => {
  it('should change camel case to lower case', () => {
    expect(upperCase('camelCase')).toEqual('CAMEL CASE')
  })

  it('should change space to space', () => {
    expect(upperCase('some whitespace')).toEqual('SOME WHITESPACE')
  })

  it('should change hyphen to space', () => {
    expect(upperCase('hyphen-text')).toEqual('HYPHEN TEXT')
  })

  it('should change Acronyms to small letter', () => {
    expect(upperCase('HTTPRequest')).toEqual('HTTP REQUEST')
  })

  it('should handle leading and trailing whitespace', () => {
    expect(upperCase('    leading and trailing whitespace')).toEqual('LEADING AND TRAILING WHITESPACE')
  })

  it('should handle special characters correctly', () => {
    expect(upperCase('special@characters!')).toEqual('SPECIAL CHARACTERS')
  })

  it('should handle strings that are already in lower case', () => {
    expect(upperCase('lower_case')).toEqual('LOWER CASE')
  })

  it('should work with an empty string', () => {
    expect(upperCase('')).toEqual('')
  })

  it('should work with screaming snake case', () => {
    expect(upperCase('FOO_BAR')).toEqual('FOO BAR')
  })
})
