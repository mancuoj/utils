import { isRelative } from './is-relative'

describe('isRelative', () => {
  it('should return true', () => {
    expect(isRelative('./file.txt')).toBe(true)
    expect(isRelative('../file.txt')).toBe(true)
  })

  it('should return false', () => {
    expect(isRelative('/file.txt')).toBe(false)
    expect(isRelative('C:/file.txt')).toBe(false)
  })
})
