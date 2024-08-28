import { upperCase } from './upper-case'

describe('upperCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'CAMEL CASE'],
    ['snake_case', 'SNAKE CASE'],
    ['kebab-case', 'KEBAB CASE'],
    ['PascalCase', 'PASCAL CASE'],
    ['some whitespace', 'SOME WHITESPACE'],
    ['HTTPRequest', 'HTTP REQUEST'],
    ['    leading and trailing whitespace', 'LEADING AND TRAILING WHITESPACE'],
    ['special@characters!', 'SPECIAL CHARACTERS'],
    ['FOO_BAR', 'FOO BAR'],
  ])('%s => %s', (input, expected) => {
    expect(upperCase(input)).toBe(expected)
  })
})
