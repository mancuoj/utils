import { getWords } from './get-words'

describe('caseSplitPattern', () => {
  it.each([
    ['', []],
    ['camelCase', ['camel', 'Case']],
    ['snake_case', ['snake', 'case']],
    ['kebab-case', ['kebab', 'case']],
    ['camelCase_snake_case-kebabCase', ['camel', 'Case', 'snake', 'case', 'kebab', 'Case']],
    ['HTTPRequest', ['HTTP', 'Request']],
    ['special_characters@123', ['special', 'characters', '123']],
    ['    leading and trailing whitespace  ', ['leading', 'and', 'trailing', 'whitespace']],
    ['underscore_case_example', ['underscore', 'case', 'example']],
    ['aB', ['a', 'B']],
    ['--FOO-BAR--', ['FOO', 'BAR']],
    ['foo2bar', ['foo', '2', 'bar']],
  ])('%s => %s', (input, expected) => {
    expect(getWords(input)).toEqual(expected)
  })
})
