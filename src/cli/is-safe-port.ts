import { isUnsafePort } from './is-unsafe-port'

/**
 * Checks if the given port is considered safe.
 *
 * @param {number} port - The port number to check.
 * @returns {boolean} `true` if the port is safe, otherwise `false`.
 *
 * @example
 * ```ts
 * console.log(isSafePort(22));    //=> false
 * console.log(isSafePort(8080));  //=> true
 * ```
 */
export function isSafePort(port: number): boolean {
  return !isUnsafePort(port)
}
