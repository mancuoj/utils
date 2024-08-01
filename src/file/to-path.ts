import { fileURLToPath } from 'node:url'

/**
 * Converts a URL object or a string path to a string path.
 *
 * @param {URL | string} path - The URL object or string path to convert.
 * @returns {string} The converted string path.
 *
 * @example
 * ```ts
 * const url = new URL('file:///tmp/hello');
 * console.log(toPath(url)); //=> '/tmp/hello'
 *
 * const path = '/tmp/hello';
 * console.log(toPath(path)); //=> '/tmp/hello'
 * ```
 */
export function toPath(path: URL | string): string {
  return path instanceof URL ? fileURLToPath(path) : path
}
