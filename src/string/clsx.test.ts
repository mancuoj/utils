import { clsx } from './clsx'

describe('ported from origin clsx test', () => {
  it('exports', () => {
    expect(clsx).toBeTypeOf('function')
    expect(clsx()).toBeTypeOf('string')
    expect(clsx()).toBe('')
  })

  it('strings', () => {
    expect(clsx('')).toBe('')
    expect(clsx('foo')).toBe('foo')
    expect(clsx(true && 'foo')).toBe('foo')
    expect(clsx(false && 'foo')).toBe('')
  })

  it('strings (variadic)', () => {
    expect(clsx('')).toBe('')
    expect(clsx('foo', 'bar')).toBe('foo bar')
    expect(clsx(true && 'foo', false && 'bar', 'baz')).toBe('foo baz')
    expect(clsx(false && 'foo', 'bar', 'baz', '')).toBe('bar baz')
  })

  it('numbers', () => {
    expect(clsx(1)).toBe('1')
    expect(clsx(12)).toBe('12')
    expect(clsx(0.1)).toBe('0.1')
    expect(clsx(0)).toBe('')
    expect(clsx(Number.POSITIVE_INFINITY)).toBe('Infinity')
    expect(clsx(Number.NaN)).toBe('')
  })

  it('numbers (variadic)', () => {
    expect(clsx(0, 1)).toBe('1')
    expect(clsx(1, 2)).toBe('1 2')
  })

  it('objects', () => {
    expect(clsx({})).toBe('')
    expect(clsx({ foo: true })).toBe('foo')
    expect(clsx({ foo: true, bar: false })).toBe('foo')
    expect(clsx({ foo: 'hiya', bar: 1 })).toBe('foo bar')
    expect(clsx({ foo: 1, bar: 0, baz: 1 })).toBe('foo baz')
    expect(clsx({ '-foo': 1, '--bar': 1 })).toBe('-foo --bar')
  })

  it('objects (variadic)', () => {
    expect(clsx({}, {})).toBe('')
    expect(clsx({ foo: 1 }, { bar: 2 })).toBe('foo bar')
    expect(clsx({ foo: 1 }, null, { baz: 1, bat: 0 })).toBe('foo baz')
    expect(clsx({ foo: 1 }, {}, {}, { bar: 'a' }, { baz: null, bat: Number.POSITIVE_INFINITY })).toBe('foo bar bat')
  })

  it('arrays', () => {
    expect(clsx([])).toBe('')
    expect(clsx(['foo'])).toBe('foo')
    expect(clsx(['foo', 'bar'])).toBe('foo bar')
    expect(clsx(['foo', 0 && 'bar', 1 && 'baz'])).toBe('foo baz')
  })

  it('arrays (nested)', () => {
    expect(clsx([[[]]])).toBe('')
    expect(clsx([[['foo']]])).toBe('foo')
    expect(clsx([true, [['foo']]])).toBe('foo')
    expect(clsx(['foo', ['bar', ['', [['baz']]]]])).toBe('foo bar baz')
  })

  it('arrays (variadic)', () => {
    expect(clsx([], [])).toBe('')
    expect(clsx(['foo'], ['bar'])).toBe('foo bar')
    expect(clsx(['foo'], null, ['baz', ''], true, '', [])).toBe('foo baz')
  })

  it('arrays (no `push` escape)', () => {
    expect(clsx({ push: 1 })).toBe('push')
    expect(clsx({ pop: true })).toBe('pop')
    expect(clsx({ push: true })).toBe('push')
    expect(clsx('hello', { world: 1, push: true })).toBe('hello world push')
  })

  it('functions', () => {
    const foo = () => {}
    expect(clsx(foo, 'hello')).toBe('hello')
    expect(clsx(foo, 'hello', clsx)).toBe('hello')
    expect(clsx(foo, 'hello', [[clsx], 'world'])).toBe('hello world')
  })
})

describe('ported from classnames test', () => {
  it('(compat) keeps object keys with truthy values', () => {
    const out = clsx({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 })
    expect(out).toBe('a f')
  })

  it('(compat) joins arrays of class names and ignore falsy values', () => {
    const out = clsx('a', 0, null, undefined, true, 1, 'b')
    expect(out).toBe('a 1 b')
  })

  it('(compat) supports heterogenous arguments', () => {
    expect(clsx({ a: true }, 'b', 0)).toBe('a b')
  })

  it('(compat) should be trimmed', () => {
    expect(clsx('', 'b', {}, '')).toBe('b')
  })

  it('(compat) returns an empty string for an empty configuration', () => {
    expect(clsx({})).toBe('')
  })

  it('(compat) supports an array of class names', () => {
    expect(clsx(['a', 'b'])).toBe('a b')
  })

  it('(compat) joins array arguments with string arguments', () => {
    expect(clsx(['a', 'b'], 'c')).toBe('a b c')
    expect(clsx('c', ['a', 'b'])).toBe('c a b')
  })

  it('(compat) handles multiple array arguments', () => {
    expect(clsx(['a', 'b'], ['c', 'd'])).toBe('a b c d')
  })

  it('(compat) handles arrays that include falsy and true values', () => {
    expect(clsx(['a', 0, null, undefined, false, true, 'b'])).toBe('a b')
  })

  it('(compat) handles arrays that include arrays', () => {
    expect(clsx(['a', ['b', 'c']])).toBe('a b c')
  })

  it('(compat) handles arrays that include objects', () => {
    expect(clsx(['a', { b: true, c: false }])).toBe('a b')
  })

  it('(compat) handles deep array recursion', () => {
    expect(clsx(['a', ['b', ['c', { d: true }]]])).toBe('a b c d')
  })

  it('(compat) handles arrays that are empty', () => {
    expect(clsx('a', [])).toBe('a')
  })

  it('(compat) handles nested arrays that have empty nested arrays', () => {
    expect(clsx('a', [[]])).toBe('a')
  })

  it('(compat) handles all types of truthy and falsy property values as expected', () => {
    const out = clsx({
      // falsy:
      null: null,
      emptyString: '',
      noNumber: Number.NaN,
      zero: 0,
      negativeZero: -0,
      false: false,
      undefined,

      // truthy (literally anything else):
      nonEmptyString: 'foobar',
      whitespace: ' ',
      function: Object.prototype.toString,
      emptyObject: {},
      nonEmptyObject: { a: 1, b: 2 },
      emptyList: [],
      nonEmptyList: [1, 2, 3],
      greaterZero: 1,
    })

    expect(out).toBe('nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero')
  })
})
