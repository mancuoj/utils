import process, { argv, env } from 'node:process'
import tty from 'node:tty'

/**
 * Check if the terminal supports color.
 *
 * @returns `true` if the terminal supports color, otherwise `false`.
 *
 * @example
 * ```ts
 * console.log(isColorSupported());  //=> true
 * ```
 */
export function isColorSupported(): boolean {
  return !('NO_COLOR' in env || argv.includes('--no-color')) && (
    'FORCE_COLOR' in env
    || argv.includes('--color')
    || process.platform === 'win32'
    || (tty.isatty(1) && env.TERM !== 'dumb')
    || 'CI' in env
  )
}
