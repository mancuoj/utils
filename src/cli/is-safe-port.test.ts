import { describe, expect, it } from 'vitest'
import { isSafePort } from './is-safe-port'

describe('isSafePort', () => {
  it('should return true if the port is safe', () => {
    expect(isSafePort(3000)).toBeTruthy()
    expect(isSafePort(5000)).toBeTruthy()
    expect(isSafePort(8080)).toBeTruthy()
  })

  it('should return false if the port is unsafe', () => {
    expect(isSafePort(1)).toBeFalsy()
    expect(isSafePort(7)).toBeFalsy()
    expect(isSafePort(9)).toBeFalsy()
  })
})
