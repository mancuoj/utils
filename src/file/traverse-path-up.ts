import path from 'node:path'
import { toPath } from './to-path'

/**
 * Creates an iterable for traversing from a given start path up to the root directory.
 *
 * Tip: To stop iteration before reaching the root, use a `break` statement within a conditional check.
 *
 * @param startPath - The starting path. Can be relative.
 * @returns An iterable that iterates over each parent directory up to the root.
 *
 * @example
 * ```ts
 * for (const directory of traversePathUp('/Users/x/y/z')) {
 *   console.log(directory);
 * }
 * //=> '/Users/x/y/z'
 * //=> '/Users/x/y'
 * //=> '/Users/x'
 * //=> '/Users'
 * //=> '/'
 * ```
 */
export function traversePathUp(startPath: string | URL): Iterable<string> {
  return {
    * [Symbol.iterator]() {
      let currentPath = path.resolve(toPath(startPath))
      let previewPath
      while (currentPath !== previewPath) {
        yield currentPath
        previewPath = currentPath
        currentPath = path.resolve(currentPath, '..')
      }
    },
  }
}
