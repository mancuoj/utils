/**
 * Converts an array of RGB components to a hexadecimal color string.
 *
 * @param {number[]} components - An array of three numbers representing the RGB components.
 * @returns {string} The hexadecimal color string in the format `#AABBCC`.
 *
 * @example
 * ```ts
 * console.log(toHexValue([52, 152, 219]));  //=> '#3498DB'
 * console.log(toHexValue([255, 87, 51]));   //=> '#FF5733'
 * ```
 */
export function toHexValue(components: number[]): string {
  return `#${components.map(c => c.toString(16).toUpperCase().padStart(2, '0')).join('')}`
}
