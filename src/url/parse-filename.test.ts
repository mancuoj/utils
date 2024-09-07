import { parseFilename } from './parse-filename'

describe('parseFilename', () => {
  it('should return the filename', () => {
    expect(parseFilename('')).toBeUndefined()
    expect(parseFilename('https://example.com/path/to/file.txt')).toBe('file.txt')
    expect(parseFilename('https://example.com/path/to/file.txt?query=1#hash')).toBe('file.txt')
    expect(parseFilename('https://example.com/path/to/file')).toBe('file')
    expect(parseFilename('https://example.com/path/to/file', { strict: true })).toBeUndefined()
  })
})
