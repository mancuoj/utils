import { flatCase } from './flat-case'

describe('flatCase', () => {
  it.each([
    ['', ''],
    ['camelCase', 'camelcase'],
    ['snake_case', 'snakecase'],
    ['kebab-case', 'kebabcase'],
    ['PascalCase', 'pascalcase'],
    ['some whitespace', 'somewhitespace'],
    ['HTTPRequest', 'httprequest'],
    ['    leading and trailing whitespace', 'leadingandtrailingwhitespace'],
    ['special@characters!', 'specialcharacters'],
    ['FOO_BAR', 'foobar'],
  ])('%s => %s', (input, expected) => {
    expect(flatCase(input)).toBe(expected)
  })
})
