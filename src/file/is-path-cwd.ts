import { resolve } from 'node:path'
import process from 'node:process'

/**
 * Checks if the given path is the current working directory.
 *
 * @param path - The path to check.
 * @returns `true` if the given path is the current working directory, otherwise `false`.
 *
 * @example
 * ```ts
 * console.log(isPathCwd(process.cwd()));       //=> true
 * console.log(isPathCwd('/some/other/path'));  //=> false
 * ```
 */
export function isPathCwd(path: string): boolean {
  const cwd = process.cwd()
  const resolvedPath = resolve(path)

  // File paths are case-insensitive on Windows
  if (process.platform === 'win32') {
    return resolvedPath.toLowerCase() === cwd.toLowerCase()
  }
  return resolvedPath === cwd
}
