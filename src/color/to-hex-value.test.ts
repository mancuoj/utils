import { describe, expect, it } from 'vitest'
import { toHexValue } from './to-hex-value'

describe('toHexValue', () => {
  it('should return the hex value of a color', () => {
    expect(toHexValue([52, 152, 219])).toBe('#3498DB')
    expect(toHexValue([255, 87, 51])).toBe('#FF5733')
    expect(toHexValue([0, 255, 0])).toBe('#00FF00')
    expect(toHexValue([0, 0, 0])).toBe('#000000')
    expect(toHexValue([255, 255, 255])).toBe('#FFFFFF')
  })
})
