import { flatCase } from './flat-case'

describe('flatCase', () => {
  it('should change camel case to camel case', () => {
    expect(flatCase('camelCase')).toEqual('camelcase')
  })

  it('should change space to camel case', () => {
    expect(flatCase('some whitespace')).toEqual('somewhitespace')
  })

  it('should change hyphen to camel case', () => {
    expect(flatCase('hyphen-text')).toEqual('hyphentext')
  })

  it('should change Acronyms to small letter', () => {
    expect(flatCase('HTTPRequest')).toEqual('httprequest')
  })

  it('should handle leading and trailing whitespace', () => {
    expect(flatCase('    leading and trailing whitespace')).toEqual('leadingandtrailingwhitespace')
  })

  it('should handle special characters correctly', () => {
    expect(flatCase('special@characters!')).toEqual('specialcharacters')
  })

  it('should handle strings that are already in camel_case', () => {
    expect(flatCase('camel_case')).toEqual('camelcase')
  })

  it('should work with an empty string', () => {
    expect(flatCase('')).toEqual('')
  })

  it('should work with screaming camel case', () => {
    expect(flatCase('FOO_BAR')).toEqual('foobar')
  })
})
