type ClassArray = Array<ClassValue>
type ClassDictionary = Record<string, any>

export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassArray
  | ClassDictionary

/**
 * Converts a ClassValue to a string or number.
 * Handles strings, numbers, arrays, and objects.
 *
 * - Strings and numbers are returned as-is.
 * - Arrays are recursively flattened, filtered for truthy values, and joined by spaces.
 * - Objects are converted to a space-separated string of keys whose values are truthy.
 * - Null, undefined, booleans, and other non-truthy values are ignored.
 *
 * @param input - The value to convert.
 * @returns The converted value.
 */
function toVal(input: ClassValue): string | number {
  if (typeof input === 'string' || typeof input === 'number')
    return input

  if (Array.isArray(input))
    return input.map(toVal).filter(Boolean).join(' ')

  if (typeof input === 'object' && input !== null)
    return Object.keys(input).filter(key => Boolean(input[key])).join(' ')

  return ''
}

/**
 * Combines multiple class values into a single string.
 *
 * This function accepts a mix of strings, numbers, booleans, null, undefined, arrays, and objects.
 * It filters out nullish and falsy values, recursively flattens arrays, and converts objects to
 * space-separated strings of their keys if their values are truthy.
 *
 * @param args - The class values to combine.
 * @returns The combined class string.
 *
 * @example
 * ```ts
 * const className = clsx('btn', ['btn-primary', { disabled: isDisabled }]);
 * // className will be 'btn btn-primary disabled' if isDisabled is true
 * ```
 */
export function clsx(...args: ClassValue[]): string {
  return args.map(toVal).filter(Boolean).join(' ')
}
