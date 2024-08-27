import process, { argv, env, platform } from 'node:process'
import tty from 'node:tty'
import { isColorSupported } from './is-color-supported'

describe('isColorSupported', () => {
  const originalEnv = env
  const originalArgv = argv || []
  const originalPlatform = platform

  afterAll(() => {
    process.env = originalEnv
    process.argv = originalArgv || []
    Object.defineProperty(process, 'platform', { value: originalPlatform })
  })

  it('should return false if NO_COLOR is set', () => {
    env.NO_COLOR = '1'
    expect(isColorSupported()).toBeFalsy()
    delete env.NO_COLOR
  })

  it('should return false if --no-color is in argv', () => {
    argv.push('--no-color')
    expect(isColorSupported()).toBeFalsy()
    argv.pop()
  })

  it('should return true if FORCE_COLOR is set', () => {
    env.FORCE_COLOR = '1'
    expect(isColorSupported()).toBeTruthy()
    delete env.FORCE_COLOR
  })

  it('should return true if --color is in argv', () => {
    argv.push('--color')
    expect(isColorSupported()).toBeTruthy()
    argv.pop()
  })

  it('should return true if platform is win32', () => {
    Object.defineProperty(process, 'platform', { value: 'win32' })
    expect(isColorSupported()).toBeTruthy()
    Object.defineProperty(process, 'platform', { value: originalPlatform })
  })

  it('should return true if tty isatty(1) and TERM is not dumb', () => {
    vi.spyOn(tty, 'isatty').mockReturnValue(true)
    env.TERM = 'xterm'
    expect(isColorSupported()).toBeTruthy()
    delete env.TERM
    vi.restoreAllMocks()
  })

  it('should return false if tty isatty(1) and TERM is dumb', () => {
    if (process.platform !== 'win32') {
      Object.keys(env).forEach(key => delete env[key])
      vi.spyOn(tty, 'isatty').mockReturnValue(true)
      env.TERM = 'dumb'
      expect(isColorSupported()).toBeFalsy()
      delete env.TERM
      vi.restoreAllMocks()
    }
  })

  it('should return true if CI is set', () => {
    env.CI = '1'
    expect(isColorSupported()).toBeTruthy()
    delete env.CI
  })
})
