import path from 'node:path'
import { toPath } from './to-path'

/**
 * Get the root directory of the given path.
 *
 * On Unix-based systems, the root is always `'/'`.
 * On Windows, the root varies and includes the drive letter (e.g., `'C:\\'`).
 *
 * @param input - The path or URL to check.
 * @returns The root directory of the path.
 *
 * @example
 * ```ts
 * console.log(rootDirectory('/users/mancuoj'));      //=> '/'
 * console.log(rootDirectory('C:\\Users\\mancuoj'));  //=> 'C:\\'
 * ```
 */
export function rootDir(input: string | URL): string {
  return path.parse(toPath(input)).root
}
