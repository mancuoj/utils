/**
 * Parses a color string into an array of RGB components.
 *
 * This function accepts color strings in the formats `#ABC`, `#AABBCC`, or `r,g,b`.
 * It returns an array of three numbers representing the red, green, and blue components.
 *
 * @param color - The color string to parse.
 * @returns An array of three numbers representing the RGB components.
 * @throws If the input color format is invalid.
 *
 * @example
 * ```ts
 * console.log(parseColor('#3498db'));     //=> [52, 152, 219]
 * console.log(parseColor('#abc'));        //=> [170, 187, 204]
 * console.log(parseColor('52,152,219'));  //=> [52, 152, 219]
 * ```
 */
export function parseColor(color: string): number[] {
  const hexMatch = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(color)
  if (hexMatch)
    return hexMatch.splice(1).map(c => Number.parseInt(c, 16))

  const hexMatchShort = /^#?([\da-f])([\da-f])([\da-f])$/i.exec(color)
  if (hexMatchShort)
    return hexMatchShort.splice(1).map(c => Number.parseInt(c + c, 16))

  if (color.includes(',')) {
    const rgbParts = color.split(',').map(p => Number.parseInt(p))
    if (rgbParts.length === 3 && rgbParts.every(part => Number.isInteger(part) && part >= 0 && part <= 255)) {
      return rgbParts
    }
  }

  throw new Error('Invalid color format! Use #ABC or #AABBCC or r,g,b')
}
