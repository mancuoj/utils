import { withTint } from './with-tint'

describe('withTint', () => {
  it('should return a function that tints a color', () => {
    const tint50 = withTint(0.5)
    expect(tint50([255, 0, 0])).toEqual([255, 128, 128])
    expect(tint50([0, 255, 0])).toEqual([128, 255, 128])
    expect(tint50([0, 0, 255])).toEqual([128, 128, 255])
  })

  it('should return a function that tints a color with different intensity', () => {
    const tint25 = withTint(0.25)
    expect(tint25([255, 0, 0])).toEqual([255, 64, 64])
    expect(tint25([0, 255, 0])).toEqual([64, 255, 64])
    expect(tint25([0, 0, 255])).toEqual([64, 64, 255])
  })
})
