import { camelCase } from './camel-case'

describe('camelCase', () => {
  it('should change camel case to camel case', () => {
    expect(camelCase('camelCase')).toEqual('camelCase')
  })

  it('should change space to camel case', () => {
    expect(camelCase('some whitespace')).toEqual('someWhitespace')
  })

  it('should change hyphen to camel case', () => {
    expect(camelCase('hyphen-text')).toEqual('hyphenText')
  })

  it('should change Acronyms to small letter', () => {
    expect(camelCase('HTTPRequest')).toEqual('httpRequest')
  })

  it('should handle leading and trailing whitespace', () => {
    expect(camelCase('    leading and trailing whitespace')).toEqual('leadingAndTrailingWhitespace')
  })

  it('should handle special characters correctly', () => {
    expect(camelCase('special@characters!')).toEqual('specialCharacters')
  })

  it('should handle strings that are already in camel_case', () => {
    expect(camelCase('camel_case')).toEqual('camelCase')
  })

  it('should work with an empty string', () => {
    expect(camelCase('')).toEqual('')
  })

  it('should work with screaming camel case', () => {
    expect(camelCase('FOO_BAR')).toEqual('fooBar')
  })
})
