import { describe, expect, it } from 'vitest'
import { toPath } from './to-path'

describe('toPath', () => {
  it('should handle string paths', () => {
    expect(toPath('/home/user/mancuoj')).toBe('/home/user/mancuoj')
  })

  it('should handle URL paths', () => {
    const url = new URL('file:///home/user/mancuoj')
    expect(toPath(url)).toBe('/home/user/mancuoj')
  })

  it('should handle empty string paths', () => {
    expect(toPath('')).toBe('')
  })

  it('should handle relative string paths', () => {
    expect(toPath('./relative/path')).toBe('./relative/path')
  })

  it('should handle Windows style paths', () => {
    expect(toPath('C:\\Users\\mancuoj')).toBe('C:\\Users\\mancuoj')
  })

  it('should handle invalid URLs', () => {
    const invalidUrl = new URL('invalid://example.com')
    expect(() => toPath(invalidUrl)).toThrow()
  })

  it('should handle non-standard protocol URLs', () => {
    const nonStandardUrl = new URL('http://example.com')
    expect(() => toPath(nonStandardUrl)).toThrow()
  })
})
