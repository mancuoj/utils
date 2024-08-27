import process from 'node:process'
import tty from 'node:tty'
import { isColorSupported } from './is-color-supported'

describe('isColorSupported', () => {
  const originalEnv = process.env
  const originalArgv = process.argv || []
  const originalPlatform = process.platform

  afterAll(() => {
    process.env = originalEnv
    process.argv = originalArgv
  })

  it('should return false if NO_COLOR is set', () => {
    process.env.NO_COLOR = '1'
    expect(isColorSupported()).toBeFalsy()
    delete process.env.NO_COLOR
  })

  it('should return false if --no-color is in argv', () => {
    process.argv.push('--no-color')
    expect(isColorSupported()).toBeFalsy()
    process.argv.pop()
  })

  it('should return true if FORCE_COLOR is set', () => {
    process.env.FORCE_COLOR = '1'
    expect(isColorSupported()).toBeTruthy()
    delete process.env.FORCE_COLOR
  })

  it('should return true if --color is in argv', () => {
    process.argv.push('--color')
    expect(isColorSupported()).toBeTruthy()
    process.argv.pop()
  })

  it('should return true if platform is win32', () => {
    Object.defineProperty(process, 'platform', { value: 'win32' })
    expect(isColorSupported()).toBeTruthy()
    Object.defineProperty(process, 'platform', { value: originalPlatform })
  })

  it('should return true if tty isatty(1) and TERM is not dumb', () => {
    vi.spyOn(tty, 'isatty').mockReturnValue(true)
    process.env.TERM = 'xterm'
    expect(isColorSupported()).toBeTruthy()
    delete process.env.TERM
    vi.restoreAllMocks()
  })

  it('should return false if tty isatty(1) and TERM is dumb', () => {
    vi.spyOn(tty, 'isatty').mockReturnValue(true)
    process.env.TERM = 'dumb'
    expect(isColorSupported()).toBeFalsy()
    delete process.env.TERM
    vi.restoreAllMocks()
  })

  it('should return true if CI is set', () => {
    process.env.CI = '1'
    expect(isColorSupported()).toBeTruthy()
    delete process.env.CI
  })
})
