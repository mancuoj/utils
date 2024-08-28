/**
 * Checks whether a value is a JavaScript primitive, narrowing the type to
 * `null`, `undefined`, `string`, `number`, `boolean`, `symbol`, or `bigint`.
 *
 * @param value The value to check.
 * @returns `true` if `value` is a primitive, `false` otherwise.
 *
 * @example
 * ```ts
 * console.log(isPrimitive(null));         //=> true
 * console.log(isPrimitive(undefined));    //=> true
 * console.log(isPrimitive(42));           //=> true
 * console.log(isPrimitive(Symbol('a')));  //=> true
 * console.log(isPrimitive(123n));         //=> true
 * console.log({});                        //=> false
 * console.log(new Date());                //=> false
 * console.log(new Map());                 //=> false
 * ```
 */
export function isPrimitive(value: unknown): value is null | undefined | string | number | boolean | symbol | bigint {
  return value == null || (typeof value !== 'object' && typeof value !== 'function')
}
