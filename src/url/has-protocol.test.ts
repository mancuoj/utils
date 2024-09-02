import { hasProtocol } from './has-protocol'

describe('hasProtocol', () => {
  it('should return true', () => {
    expect(hasProtocol('http://example.com')).toBe(true)
    expect(hasProtocol('https://example.com')).toBe(true)
    expect(hasProtocol('mailto:user@example.com')).toBe(true)
    expect(hasProtocol('tel:1234567890')).toBe(true)
    expect(hasProtocol('data:text/plain;base64,SGVsbG8gV29ybGQh')).toBe(true)
    expect(hasProtocol('file://example.com')).toBe(true)
    expect(hasProtocol('ftp://example.com')).toBe(true)
    expect(hasProtocol('git://example.com')).toBe(true)
    expect(hasProtocol('git+ssh://example.com')).toBe(true)
    expect(hasProtocol('git+https://example.com')).toBe(true)
    expect(hasProtocol('chrome://extensions')).toBe(true)
    expect(hasProtocol('javascript:alert("Hello, world!")')).toBe(true)
    expect(hasProtocol('http://')).toBe(true)
    expect(hasProtocol('http:/example.com')).toBe(true)
  })

  it('should return false', () => {
    expect(hasProtocol('//example.com')).toBe(false)
    expect(hasProtocol('\\example.com')).toBe(false)
    expect(hasProtocol('example.com')).toBe(false)
    expect(hasProtocol('/file.txt')).toBe(false)
    expect(hasProtocol('file.txt')).toBe(false)
  })

  it('should work with opts', () => {
    expect(hasProtocol('//example.com', false)).toBe(false)
    expect(hasProtocol('//example.com', true)).toBe(true)
    expect(hasProtocol('ftp:\example.com')).toBe(true)
    expect(hasProtocol('ftp:\example.com', { strict: true })).toBe(false)
  })
})
