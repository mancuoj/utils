const _DRIVE_LETTER_START_RE = /^[A-Z]:\//i

/**
 * Normalizes a Windows path to POSIX format.
 *
 * This function replaces backslashes with forward slashes and converts the drive letter to uppercase.
 *
 * @param {string} input - The Windows path to normalize.
 * @returns {string} The normalized POSIX path.
 *
 * @example
 * ```ts
 * console.log(normalizeWindowsPath('c:\\Users\\Documents'));
 * //=> 'C:/Users/Documents'
 *
 * console.log(normalizeWindowsPath('E:\\Folder\\Subfolder\\file.txt'));
 * //=> 'E:/Folder/Subfolder/file.txt'
 * ```
 */
export function normalizeWindowsPath(input: string): string {
  if (!input) {
    return input
  }

  return input
    .replace(/\\/g, '/')
    .replace(_DRIVE_LETTER_START_RE, r => r.toUpperCase())
}
