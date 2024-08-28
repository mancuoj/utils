import { trainCase } from './train-case'

describe('trainCase', () => {
  it.each([
    ['', ''],
    ['f', 'F'],
    ['foo', 'Foo'],
    ['foo-bAr', 'Foo-B-Ar'],
    ['AcceptCH', 'Accept-CH'],
    ['foo_bar-baz/qux', 'Foo-Bar-Baz-Qux'],
    ['FOO_BAR', 'FOO-BAR'],
    ['foo--bar-Baz', 'Foo-Bar-Baz'],
    ['WWW-authenticate', 'WWW-Authenticate'],
    ['WWWAuthenticate', 'WWW-Authenticate'],
  ])('%s => %s', (input, expected) => {
    expect(trainCase(input)).toBe(expected)
  })

  it.each([
    ['AcceptCH', 'Accept-Ch'],
    ['FOO_BAR', 'Foo-Bar'],
    ['WWW-authenticate', 'Www-Authenticate'],
  ])('%s => %s', (input, expected) => {
    expect(trainCase(input, true)).toBe(expected)
  })
})
