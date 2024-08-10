import { withShade } from './with-shade'

describe('withShade', () => {
  it('should return a function that shades a color', () => {
    const shade50 = withShade(0.5)
    expect(shade50([255, 0, 0])).toEqual([128, 0, 0])
    expect(shade50([0, 255, 0])).toEqual([0, 128, 0])
    expect(shade50([0, 0, 255])).toEqual([0, 0, 128])
  })

  it('should return a function that shades a color with different intensity', () => {
    const shade25 = withShade(0.25)
    expect(shade25([255, 0, 0])).toEqual([64, 0, 0])
    expect(shade25([0, 255, 0])).toEqual([0, 64, 0])
    expect(shade25([0, 0, 255])).toEqual([0, 0, 64])
  })
})
