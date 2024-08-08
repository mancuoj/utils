import { describe, expect, it } from 'vitest'
import { tint } from './tint'

describe('tint', () => {
  it('should return a lighter color', () => {
    expect(tint([255, 0, 0], 0.5)).toEqual([255, 128, 128])
    expect(tint([0, 255, 0], 0.5)).toEqual([128, 255, 128])
    expect(tint([0, 0, 255], 0.5)).toEqual([128, 128, 255])
    expect(tint([0, 0, 0], 0.5)).toEqual([128, 128, 128])
    expect(tint([255, 255, 255], 0.5)).toEqual([255, 255, 255])
  })
})
