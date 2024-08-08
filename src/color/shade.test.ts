import { describe, expect, it } from 'vitest'
import { shade } from './shade'

describe('shade', () => {
  it('should return a darker color', () => {
    expect(shade([255, 0, 0], 0.5)).toEqual([128, 0, 0])
    expect(shade([0, 255, 0], 0.5)).toEqual([0, 128, 0])
    expect(shade([0, 0, 255], 0.5)).toEqual([0, 0, 128])
    expect(shade([255, 255, 255], 0.5)).toEqual([128, 128, 128])
    expect(shade([0, 0, 0], 0.5)).toEqual([0, 0, 0])
  })
})
