import { isScriptProtocol } from './is-script-protocol'

describe('isScriptProtocol', () => {
  it('should return true', () => {
    expect(isScriptProtocol('blob:')).toBe(true)
    expect(isScriptProtocol('data:')).toBe(true)
    expect(isScriptProtocol('javascript:')).toBe(true)
    expect(isScriptProtocol('vbscript:')).toBe(true)
  })

  it('should return false', () => {
    expect(isScriptProtocol('http:')).toBe(false)
    expect(isScriptProtocol('https:')).toBe(false)
    expect(isScriptProtocol('mailto:')).toBe(false)
    expect(isScriptProtocol('tel:')).toBe(false)
    expect(isScriptProtocol('file:')).toBe(false)
    expect(isScriptProtocol('ftp:')).toBe(false)
    expect(isScriptProtocol('git:')).toBe(false)
  })
})
