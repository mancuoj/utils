import { describe, expect, it } from 'vitest'
import { isUnsafePort } from './is-unsafe-port'

describe('isUnsafePort', () => {
  it('should return true if the port is safe', () => {
    expect(isUnsafePort(1)).toBeTruthy()
    expect(isUnsafePort(7)).toBeTruthy()
    expect(isUnsafePort(9)).toBeTruthy()
  })

  it('should return false if the port is unsafe', () => {
    expect(isUnsafePort(3000)).toBeFalsy()
    expect(isUnsafePort(5000)).toBeFalsy()
    expect(isUnsafePort(8080)).toBeFalsy()
  })
})
