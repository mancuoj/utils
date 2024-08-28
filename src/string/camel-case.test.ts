import { camelCase } from './camel-case'

describe('camelCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'camelCase'],
    ['snake_case', 'snakeCase'],
    ['kebab-case', 'kebabCase'],
    ['PascalCase', 'pascalCase'],
    ['some whitespace', 'someWhitespace'],
    ['HTTPRequest', 'httpRequest'],
    ['    leading and trailing whitespace', 'leadingAndTrailingWhitespace'],
    ['special@characters!', 'specialCharacters'],
    ['FOO_BAR', 'fooBar'],
  ])('%s => %s', (input, expected) => {
    expect(camelCase(input)).toBe(expected)
  })
})
