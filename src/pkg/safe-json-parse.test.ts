import { describe, expect, it, vi } from 'vitest'
import { safeJsonParse } from './safe-json-parse'

describe('safeJsonParse', () => {
  it('should return the passed value if it\'s not a string', () => {
    const testCases = [
      { input: {} },
      { input: [] },
      { input: 123 },
      { input: true },
      { input: false },
      { input: null },
      { input: undefined },
      { input: Number.POSITIVE_INFINITY },
      { input: Number.NEGATIVE_INFINITY },
    ]

    for (const testCase of testCases) {
      expect(safeJsonParse(testCase.input)).toStrictEqual(testCase.input)
    }
  })

  it('case-insensitive', () => {
    expect(safeJsonParse('true')).toStrictEqual(true)
    expect(safeJsonParse('TRUE')).toStrictEqual(true)
    expect(safeJsonParse('false')).toStrictEqual(false)
    expect(safeJsonParse('FALSE')).toStrictEqual(false)
    expect(safeJsonParse('null')).toBeNull()
    expect(safeJsonParse('NULL')).toBeNull()
    expect(safeJsonParse('nan')).toBeNaN()
    expect(safeJsonParse('NaN')).toBeNaN()
    expect(safeJsonParse('infinity')).toStrictEqual(Number.POSITIVE_INFINITY)
    expect(safeJsonParse('Infinity')).toStrictEqual(Number.POSITIVE_INFINITY)
    expect(safeJsonParse('-infinity')).toStrictEqual(Number.NEGATIVE_INFINITY)
    expect(safeJsonParse('-Infinity')).toStrictEqual(Number.NEGATIVE_INFINITY)
    expect(safeJsonParse('undefined')).toBeUndefined()
    expect(safeJsonParse('UNDEFINED')).toBeUndefined()
  })

  it('parses number', () => {
    const testCases: Array<{ input: string, output: unknown }> = [
      { input: '9', output: 9 },
      { input: '-9', output: -9 },
      { input: '0.30000000000000004', output: 0.300_000_000_000_000_04 },
      { input: '9007199254740991', output: 9_007_199_254_740_991 },
      { input: '9e2', output: 900 },
      { input: '9e+2', output: 900 },
      { input: '9e-2', output: 0.09 },
      { input: '9.9e10000', output: Number.POSITIVE_INFINITY },
      { input: '9.9e-10000', output: 0 },
    ]

    for (const testCase of testCases) {
      expect(safeJsonParse(testCase.input)).toStrictEqual(testCase.output)
    }
  })

  it('surrounding spaces', () => {
    expect(safeJsonParse('  true ')).toBeTruthy()
    expect(safeJsonParse(' -123 ')).toStrictEqual(-123)
    expect(safeJsonParse(' { "test": 123 }  ')).toStrictEqual({ test: 123 })
  })

  it('parses string with escape characters', () => {
    expect(safeJsonParse('"a\\nb"')).toBe('a\nb')
  })

  it('parses valid JSON texts', () => {
    const testCases: Array<{ input: string, output: unknown }> = [
      { input: '{}', output: {} },
      { input: '[]', output: [] },
      { input: '{ "key": "value" }', output: { key: 'value' } },
      { input: '{ "constructor": "value" }', output: { constructor: 'value' } },
      { input: '{ "constructor": null }', output: { constructor: null } },
      { input: '[1,2,3]', output: [1, 2, 3] },
    ]

    for (const testCase of testCases) {
      expect(safeJsonParse(testCase.input)).toStrictEqual(testCase.output)
    }
  })

  it('should return the passed string if it\'s a invalid JSON text by default', () => {
    const testCases = [
      { input: '{     ' },
      { input: '[     ' },
      { input: '"     ' },
      { input: '[1,2,3]?' },
      { input: 'invalid JSON text' },
    ]

    for (const testCase of testCases) {
      expect(safeJsonParse(testCase.input)).toStrictEqual(testCase.input)
    }
  })

  it('should parse valid string as is with fast path', () => {
    const testCases = [
      { input: '"Hello"', output: 'Hello' },
      { input: ' "Hello" ', output: 'Hello' },
      { input: ' "Invalid', output: ' "Invalid' },
    ]

    for (const testCase of testCases) {
      expect(safeJsonParse(testCase.input)).toStrictEqual(testCase.output)
    }
  })

  it('should prevent prototype pollution', () => {
    const spy = vi
      .spyOn(console, 'warn')
      // eslint-disable-next-line no-console
      .mockImplementation(console.log)

    const warnMessage = (key: string) => `[safeJsonParse] Dropping "${key}" key to prevent prototype pollution.`

    const testCases = [
      {
        input: '{ "__proto__": {} }',
        output: {},
        warning: warnMessage('__proto__'),
      },
      {
        input: '{ "constructor": { "prototype": {} } }',
        output: {},
        warning: warnMessage('constructor'),
      },
      {
        input: '{ "constructor": { "prototype": null } }',
        output: {},
        warning: warnMessage('constructor'),
      },
    ]

    for (const testCase of testCases) {
      expect(safeJsonParse(testCase.input)).toStrictEqual(testCase.output)
      expect(spy).toHaveBeenCalledWith(testCase.warning)
    }
  })

  describe('should throw an error if it\'s a invalid JSON texts with strict mode', () => {
    const testCases = [
      { input: '{     ', output: 'Expected property name or' },
      { input: '[     ', output: 'Unexpected end of JSON input' },
      { input: '"     ', output: 'Unterminated string in JSON at position' },
      { input: '[1,2,3]?', output: 'Unexpected non-whitespace character' },
      { input: 'invalid JSON text', output: 'Invalid JSON' },
      { input: ' "Invalid', output: 'Unterminated string in JSON at position' },
    ]

    for (const testCase of testCases) {
      it(testCase.input, () => {
        expect(() => safeJsonParse(testCase.input, { strict: true })).toThrowError(
          testCase.output || '',
        )
      })
    }
  })

  it('should throw an error on possible prototype pollution with strict mode', () => {
    const testCases = [
      {
        input: '{ "__proto__": {} }',
        output: {},
      },
      {
        input: '{ "constructor": { "prototype": {} } }',
        output: {},
      },
      {
        input: '{ "constructor": { "prototype": null } }',
        output: {},
      },
    ]

    for (const testCase of testCases) {
      expect(() => safeJsonParse(testCase.input, { strict: true })).toThrowError(
        '[safeJsonParse] Possible prototype pollution',
      )
    }
  })
})
