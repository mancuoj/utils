import { describe, expect, it } from 'vitest'
import { traversePathUp } from './traverse-path-up'

describe('traversePathUp', () => {
  it('should traverse from a given start path up to the root directory', () => {
    if (process.platform === 'win32') {
      const expectedPath = [
        'C:\\Users\\x\\y\\z',
        'C:\\Users\\x\\y',
        'C:\\Users\\x',
        'C:\\Users',
        'C:\\',
      ]
      const actualPath = [...traversePathUp('C:\\Users\\x\\y\\z')]
      expect(actualPath).toStrictEqual(expectedPath)
    }
    else {
      const expectedPath = [
        '/Users/x/y/z',
        '/Users/x/y',
        '/Users/x',
        '/Users',
        '/',
      ]
      const actualPath = [...traversePathUp('/Users/x/y/z')]
      expect(actualPath).toStrictEqual(expectedPath)
    }
  })
})
