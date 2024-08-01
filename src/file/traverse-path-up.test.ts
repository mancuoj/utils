import { describe, expect, it } from 'vitest'
import { traversePathUp } from './traverse-path-up'

describe('traversePathUp', () => {
  it('should traverse from a given start path up to the root directory', () => {
    const expectedPath = [
      '/Users/x/y/z',
      '/Users/x/y',
      '/Users/x',
      '/Users',
      '/',
    ]
    const actualPath = [...traversePathUp('/Users/x/y/z')]
    expect(actualPath).toStrictEqual(expectedPath)
  })
})
