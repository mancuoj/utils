import { startCase } from './start-case'

describe('startCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'Camel Case'],
    ['snake_case', 'Snake Case'],
    ['kebab-case', 'Kebab Case'],
    ['PascalCase', 'Pascal Case'],
    ['some whitespace', 'Some Whitespace'],
    ['HTTPRequest', 'HTTP Request'],
    ['    leading and trailing whitespace', 'Leading And Trailing Whitespace'],
    ['special@characters!', 'Special Characters'],
    ['FOO_BAR', 'FOO BAR'],
  ])('%s => %s', (input, expected) => {
    expect(startCase(input)).toBe(expected)
  })
})
