import process, { argv, env } from 'node:process'
import tty from 'node:tty'
import { isColorSupported } from './is-color-supported'

describe('isColorSupported', () => {
  const originalEnv = env || {}
  const originalArgv = argv || []

  afterAll(() => {
    process.env = originalEnv
    process.argv = originalArgv
  })

  it('should return false if NO_COLOR is set', () => {
    env.NO_COLOR = '1'
    expect(isColorSupported()).toBe(false)
    delete env.NO_COLOR
  })

  it('should return false if --no-color is in argv', () => {
    argv.push('--no-color')
    expect(isColorSupported()).toBe(false)
    argv.pop()
  })

  it('should return true if FORCE_COLOR is set', () => {
    if (process.platform !== 'win32') {
      env.FORCE_COLOR = '1'
      expect(isColorSupported()).toBe(true)
      delete env.FORCE_COLOR
    }
  })

  it('should return true if --color is in argv', () => {
    if (process.platform !== 'win32') {
      argv.push('--color')
      expect(isColorSupported()).toBe(true)
      argv.pop()
    }
  })

  it('should return true if platform is win32', () => {
    if (process.platform === 'win32') {
      expect(isColorSupported()).toBe(true)
    }
  })

  it('should return true if tty isatty(1) and TERM is not dumb', () => {
    if (process.platform !== 'win32') {
      vi.spyOn(tty, 'isatty').mockReturnValue(true)
      env.TERM = 'xterm'
      expect(isColorSupported()).toBe(true)
      delete env.TERM
      vi.restoreAllMocks()
    }
  })

  it('should return false if tty isatty(1) and TERM is dumb', () => {
    if (process.platform !== 'win32') {
      Object.keys(env).forEach(key => delete env[key])
      vi.spyOn(tty, 'isatty').mockReturnValue(true)
      env.TERM = 'dumb'
      expect(isColorSupported()).toBe(false)
      delete env.TERM
      vi.restoreAllMocks()
    }
  })

  it('should return true if CI is set', () => {
    if (process.platform !== 'win32') {
      env.CI = '1'
      expect(isColorSupported()).toBe(true)
      delete env.CI
    }
  })
})
