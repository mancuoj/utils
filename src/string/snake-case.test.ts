import { snakeCase } from './snake-case'

describe('snakeCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'camel_case'],
    ['snake_case', 'snake_case'],
    ['kebab-case', 'kebab_case'],
    ['PascalCase', 'pascal_case'],
    ['some whitespace', 'some_whitespace'],
    ['HTTPRequest', 'http_request'],
    ['    leading and trailing whitespace', 'leading_and_trailing_whitespace'],
    ['special@characters!', 'special_characters'],
    ['FOO_BAR', 'foo_bar'],
  ])('%s => %s', (input, expected) => {
    expect(snakeCase(input)).toBe(expected)
  })
})
