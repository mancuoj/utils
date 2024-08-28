import { isPrimitive } from './is-primitive'

describe('isPrimitive', () => {
  it('should return true for primitives', () => {
    expect(isPrimitive(null)).toBeTruthy()
    expect(isPrimitive(undefined)).toBeTruthy()
    expect(isPrimitive('123')).toBeTruthy()
    expect(isPrimitive(false)).toBeTruthy()
    expect(isPrimitive(true)).toBeTruthy()
    expect(isPrimitive(Symbol('a'))).toBeTruthy()
    expect(isPrimitive(123n)).toBeTruthy()
  })

  it('should return false for values that are not primitives', () => {
    expect(isPrimitive({})).toBeFalsy()
    expect(isPrimitive(new Date())).toBeFalsy()
    expect(isPrimitive(new Map())).toBeFalsy()
    expect(isPrimitive(new Set())).toBeFalsy()
    expect(isPrimitive([1, 2, 3])).toBeFalsy()
  })
})
