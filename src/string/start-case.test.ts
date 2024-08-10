import { startCase } from './start-case'

describe('startCase', () => {
  it('should capitalize each word', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar')
    expect(startCase('fooBar')).toBe('Foo Bar')
    expect(startCase('__FOO_BAR__')).toBe('FOO BAR')
  })

  it('should handle compound words', () => {
    expect(startCase('createElement')).toBe('Create Element')
    expect(startCase('iPhone')).toBe('I Phone')
    expect(startCase('XMLHttpRequest')).toBe('XML Http Request')
  })

  it('should handle various delimiters', () => {
    expect(startCase('_abc_123_def')).toBe('Abc 123 Def')
    expect(startCase('__abc__123__def__')).toBe('Abc 123 Def')
    expect(startCase('ABC-DEF')).toBe('ABC DEF')
    expect(startCase('ABC DEF')).toBe('ABC DEF')
  })

  it('should handle empty strings', () => {
    expect(startCase('')).toBe('')
  })

  it('should handle strings with only delimiters', () => {
    expect(startCase('_-_-_-_')).toBe('')
  })

  it('should work with numbers', () => {
    expect(startCase('12abc 12ABC')).toBe('12 Abc 12 ABC')
  })

  it('should handle consecutive uppercase letters', () => {
    expect(startCase('ABC')).toBe('ABC')
    expect(startCase('ABCdef')).toBe('AB Cdef')
  })

  it('should handle combinations of numbers and letters', () => {
    expect(startCase('123ABC')).toBe('123 ABC')
    expect(startCase('a1B2c3')).toBe('A 1 B 2 C 3')
  })

  it('should handle special characters', () => {
    expect(startCase('foo@bar')).toBe('Foo Bar')
    expect(startCase('test*case')).toBe('Test Case')
  })

  it('should handle long strings', () => {
    expect(startCase('thisIsAVeryLongStringWithManyWordsAndNumbers123')).toBe(
      'This Is A Very Long String With Many Words And Numbers 123',
    )
  })

  it('should handle whitespace characters', () => {
    expect(startCase('  foo  bar  ')).toBe('Foo Bar')
    expect(startCase('\tfoo\nbar')).toBe('Foo Bar')
  })
})
