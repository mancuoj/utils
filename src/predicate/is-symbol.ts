/**
 * Checks if the given value is a symbol, narrowing the type to `symbol`.
 *
 * @param x - The value to test if it is a symbol.
 * @returns `true` if the value is a symbol, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isSymbol(Symbol('test')));  //=> true
 * console.log(isSymbol(42));              //=> false
 * ```
 */
export function isSymbol(x: unknown): x is symbol {
  return typeof x === 'symbol'
}
