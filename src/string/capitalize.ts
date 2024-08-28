/**
 * Converts the first character of a string to uppercase and the remaining to lowercase.
 *
 * @param str - The string that is to be converted.
 * @returns The converted string.
 *
 * @example
 * ```ts
 * console.log(capitalize('hello'));  //=> 'Hello'
 * console.log(capitalize('Hello'));  //=> 'Hello'
 * console.log(capitalize('HELLO'));  //=> 'Hello'
 * ```
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()) as Capitalize<T>
}
