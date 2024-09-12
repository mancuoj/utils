import { clear } from './clear'

describe('clear', () => {
  it('should return the correct escape code', () => {
    expect(clear.screen).toBe('\x1Bc')
  })
})
