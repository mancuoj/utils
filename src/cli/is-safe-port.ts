import { isUnsafePort } from './is-unsafe-port'

/**
 * Checks if the given port is considered safe.
 *
 * @param port - The port number to check.
 * @returns `true` if the port is safe, otherwise `false`.
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
