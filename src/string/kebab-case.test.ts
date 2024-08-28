import { kebabCase } from './kebab-case'

describe('kebabCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'camel-case'],
    ['snake_case', 'snake-case'],
    ['kebab-case', 'kebab-case'],
    ['PascalCase', 'pascal-case'],
    ['some whitespace', 'some-whitespace'],
    ['HTTPRequest', 'http-request'],
    ['    leading and trailing whitespace', 'leading-and-trailing-whitespace'],
    ['special@characters!', 'special-characters'],
    ['FOO_BAR', 'foo-bar'],
  ])('%s => %s', (input, expected) => {
    expect(kebabCase(input)).toBe(expected)
  })
})
