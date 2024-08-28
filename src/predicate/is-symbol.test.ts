import { isSymbol } from './is-symbol'

describe('isSymbol', () => {
  it('should return true for symbols', () => {
    expect(isSymbol(Symbol('test'))).toBeTruthy()
    expect(isSymbol(Symbol.for('test'))).toBeTruthy()
    expect(isSymbol(Symbol.iterator)).toBeTruthy()
  })

  it('should return false for non-symbols', () => {
    expect(isSymbol(42)).toBeFalsy()
    expect(isSymbol('test')).toBeFalsy()
    expect(isSymbol(null)).toBeFalsy()
    expect(isSymbol(undefined)).toBeFalsy()
    expect(isSymbol({})).toBeFalsy()
    expect(isSymbol([])).toBeFalsy()
  })
})
