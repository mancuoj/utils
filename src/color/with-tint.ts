import { tint } from './tint'

/**
 * Returns a function that applies a tint to an RGB color with a specified intensity.
 *
 * @param intensity - A number between 0 and 1 representing the intensity of the tint.
 * @returns A function that takes an RGB color and returns a new RGB color with the applied tint.
 *
 * @example
 * ```ts
 * const tint50 = withTint(0.5);
 * console.log(tint50([255, 0, 0]));  //=> [255, 128, 128]
 * ```
 */
export function withTint(intensity: number) {
  return (hex: number[]) => tint(hex, intensity)
}
