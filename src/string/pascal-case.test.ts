import { pascalCase } from './pascal-case'

describe('pascalCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'CamelCase'],
    ['snake_case', 'SnakeCase'],
    ['kebab-case', 'KebabCase'],
    ['PascalCase', 'PascalCase'],
    ['some whitespace', 'SomeWhitespace'],
    ['HTTPRequest', 'HttpRequest'],
    ['    leading and trailing whitespace', 'LeadingAndTrailingWhitespace'],
    ['special@characters!', 'SpecialCharacters'],
    ['FOO_BAR', 'FooBar'],
  ])('%s => %s', (input, expected) => {
    expect(pascalCase(input)).toBe(expected)
  })
})
