import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { toPath } from './to-path'

describe('toPath', () => {
  it('should handle string paths', () => {
    expect(toPath('/home/user/mancuoj')).toBe('/home/user/mancuoj')
  })

  it('should handle URL paths', () => {
    const url = new URL('file:///home/user/docs')
    const expectedPath = fileURLToPath(url)
    expect(toPath(url)).toBe(expectedPath)
  })
})
