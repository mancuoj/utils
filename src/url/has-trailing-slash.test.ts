import { hasTrailingSlash } from './has-trailing-slash'

describe('hasTrailingSlash', () => {
  it('should return true', () => {
    expect(hasTrailingSlash('/file.txt/')).toBe(true)
    expect(hasTrailingSlash('/file.txt/?query=1', true)).toBe(true)
    expect(hasTrailingSlash('/file.txt/#fragment', true)).toBe(true)
  })

  it('should return false', () => {
    expect(hasTrailingSlash('/file.txt')).toBe(false)
    expect(hasTrailingSlash('/file.txt/?query=1')).toBe(false)
    expect(hasTrailingSlash('/file.txt/#fragment')).toBe(false)
  })
})
