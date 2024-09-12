import { erase } from './erase'

describe('erase', () => {
  it('should return the correct escape code', () => {
    expect(erase.screen).toBe('\x1B[2J')
    expect(erase.line).toBe('\x1B[2K')
    expect(erase.lineEnd).toBe('\x1B[K')
    expect(erase.lineStart).toBe('\x1B[1K')
    expect(erase.up()).toBe('\x1B[1J')
    expect(erase.down()).toBe('\x1B[J')
    expect(erase.up(2)).toBe('\x1B[1J\x1B[1J')
    expect(erase.down(2)).toBe('\x1B[J\x1B[J')
    expect(erase.lines(0)).toBe('')
    expect(erase.lines(1)).toBe('\x1B[2K\x1B[G')
    expect(erase.lines(2)).toBe('\x1B[2K\x1B[1A\x1B[2K\x1B[G')
  })
})
