import path from 'node:path'
import process from 'node:process'
import { afterAll, describe, expect, it } from 'vitest'
import { isPathCwd } from './is-path-cwd'

describe('isPathCwd', () => {
  const originalCwd = process.cwd()

  afterAll(() => {
    process.chdir(originalCwd)
  })

  it('should return true for the current working directory', () => {
    expect(isPathCwd(process.cwd())).toBe(true)
  })

  it('should return false for a different path', () => {
    const differentPath = path.resolve(process.cwd(), '..')
    expect(isPathCwd(differentPath)).toBe(false)
  })

  it('should handle relative paths correctly', () => {
    const relativePath = '.'
    expect(isPathCwd(relativePath)).toBe(true)
  })

  it('should handle paths with different cases on Windows and non-Windows', () => {
    if (process.platform === 'win32') {
      const upperCaseCwd = process.cwd().toUpperCase()
      expect(isPathCwd(upperCaseCwd)).toBe(true)

      const lowerCaseCwd = process.cwd().toLowerCase()
      expect(isPathCwd(lowerCaseCwd)).toBe(true)
    }
    else {
      const upperCaseCwd = process.cwd().toUpperCase()
      expect(isPathCwd(upperCaseCwd)).toBe(false)

      const lowerCaseCwd = process.cwd().toLowerCase()
      expect(isPathCwd(lowerCaseCwd)).toBe(false)
    }
  })
})
