import { isSymbol } from './is-symbol'

describe('isSymbol', () => {
  it('should return true for symbols', () => {
    expect(isSymbol(Symbol('test'))).toBe(true)
    expect(isSymbol(Symbol.for('test'))).toBe(true)
    expect(isSymbol(Symbol.iterator)).toBe(true)
  })

  it('should return false for non-symbols', () => {
    expect(isSymbol(42)).toBe(false)
    expect(isSymbol('test')).toBe(false)
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol([])).toBe(false)
  })
})
