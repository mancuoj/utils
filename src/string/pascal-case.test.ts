import { pascalCase } from './pascal-case'

describe('pascalCase', () => {
  it('should change space to pascal case', () => {
    expect(pascalCase('some whitespace')).toEqual('SomeWhitespace')
  })

  it('should change hyphen to pascal case', () => {
    expect(pascalCase('hyphen-text')).toEqual('HyphenText')
  })

  it('should change Acronyms to small letter', () => {
    expect(pascalCase('HTTPRequest')).toEqual('HttpRequest')
  })

  it('should handle leading and trailing whitespace', () => {
    expect(pascalCase('    leading and trailing whitespace')).toEqual('LeadingAndTrailingWhitespace')
  })

  it('should handle special characters correctly', () => {
    expect(pascalCase('special@characters!')).toEqual('SpecialCharacters')
  })

  it('should handle strings that are already in PascalCase', () => {
    expect(pascalCase('PascalCase')).toEqual('PascalCase')
  })

  it('should work with an empty string', () => {
    expect(pascalCase('')).toEqual('')
  })

  it('should work with screaming camel case', () => {
    expect(pascalCase('FOO_BAR')).toEqual('FooBar')
  })
})
