import process from 'node:process'
import { afterAll, describe, expect, it } from 'vitest'
import { isPathCwd } from './is-path-cwd'

describe('isPathCwd', () => {
  const originalCwd = process.cwd()

  afterAll(() => {
    process.chdir(originalCwd)
  })

  it('non-win32', () => {
    expect(isPathCwd(process.cwd())).toBe(true)
    expect(isPathCwd('.')).toBe(true)
    expect(isPathCwd('..')).toBe(false)
    expect(isPathCwd('foo')).toBe(false)
    expect(isPathCwd('/')).toBe(false)
    expect(isPathCwd('/some/other/path')).toBe(false)
  })

  it('win32', () => {
    const processPlatform = process.platform
    Object.defineProperty(process, 'platform', { value: 'win32' })

    expect(isPathCwd(process.cwd())).toBe(true)
    expect(isPathCwd(process.cwd().toLowerCase())).toBe(true)
    expect(isPathCwd(process.cwd().toUpperCase())).toBe(true)
    expect(isPathCwd('C:\\')).toBe(false)
    expect(isPathCwd('C:\\some\\other\\path')).toBe(false)

    Object.defineProperty(process, 'platform', { value: processPlatform })
  })
})
