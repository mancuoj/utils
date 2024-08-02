import { describe, expect, it } from 'vitest'
import { parseColor } from './parse-color'

describe('parseColor', () => {
  it('should parse valid colors', () => {
    expect(parseColor('#3498DB')).toEqual([52, 152, 219])
    expect(parseColor('#3498db')).toEqual([52, 152, 219])
    expect(parseColor('3498db')).toEqual([52, 152, 219])
    expect(parseColor('#ABC')).toEqual([170, 187, 204])
    expect(parseColor('#abc')).toEqual([170, 187, 204])
    expect(parseColor('ABC')).toEqual([170, 187, 204])
    expect(parseColor('52,152,219')).toEqual([52, 152, 219])
    expect(parseColor('52, 152, 219')).toEqual([52, 152, 219])
  })

  it('should throw an error for invalid colors', () => {
    expect(() => parseColor('')).toThrowError()
    expect(() => parseColor(' ')).toThrowError()
    expect(() => parseColor('#')).toThrowError()
    expect(() => parseColor('#1')).toThrowError()
    expect(() => parseColor('1')).toThrowError()
    expect(() => parseColor('#12345')).toThrowError()
    expect(() => parseColor('12345')).toThrowError()
    expect(() => parseColor('12, 23')).toThrowError()
    expect(() => parseColor('255,-1, 0')).toThrowError()
    expect(() => parseColor('0, 0, 256')).toThrowError()
  })
})
