/**
 * Checks if the given value is a function.
 *
 * @param x - The value to test if it is a function.
 * @returns `true` if the value is a function, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isFunction(async function () {}));  //=> true
 * console.log(isFunction(function* () {}));       //=> true
 * console.log(isFunction(Array.prototype.slice)); //=> true
 * console.log(isFunction(Proxy));                 //=> true
 * ```
 */
export function isFunction(x: unknown): x is (...args: unknown[]) => unknown {
  return typeof x === 'function'
}
