import process from 'node:process'
import { afterAll, describe, expect, it } from 'vitest'
import { isPathCwd } from './is-path-cwd'

describe('isPathCwd', () => {
  const originalCwd = process.cwd()

  afterAll(() => {
    process.chdir(originalCwd)
  })

  it('non-win32', () => {
    expect(isPathCwd(process.cwd())).toBeTruthy()
    expect(isPathCwd('.')).toBeTruthy()
    expect(isPathCwd('..')).toBeFalsy()
    expect(isPathCwd('/')).toBeFalsy()
    expect(isPathCwd('foo')).toBeFalsy()
    expect(isPathCwd(process.cwd().toUpperCase())).toBeFalsy()
  })

  it('win32', () => {
    const processPlatform = process.platform
    Object.defineProperty(process, 'platform', { value: 'win32' })

    expect(isPathCwd(process.cwd())).toBeTruthy()
    expect(isPathCwd(process.cwd().toLowerCase())).toBeTruthy()
    expect(isPathCwd(process.cwd().toUpperCase())).toBeTruthy()

    Object.defineProperty(process, 'platform', { value: processPlatform })
  })
})
