/**
 * Adjusts the brightness of an RGB color by adding a tint.
 *
 * This function takes an array of three numbers representing the RGB components
 * of a color and an intensity factor, and returns a new RGB color where each
 * component is adjusted to be closer to 255 (white) based on the intensity.
 *
 * @param components - An array of three numbers representing the RGB components.
 * @param intensity - A number between 0 and 1 representing the intensity of the tint. 0 means no change, and 1 means full white.
 * @returns A new array of three numbers representing the tinted RGB components.
 *
 * @example
 * ```ts
 * console.log(tint([255, 0, 0], 0.5));       //=> [255, 128, 128]
 * console.log(tint([100, 100, 100], 0.25));  //=> [139, 139, 139]
 * console.log(tint([100, 100, 100], 1));     //=> [255, 255, 255]
 * ```
 */
export function tint(components: number[], intensity: number): number[] {
  return components.map(c => Math.round(c + (255 - c) * intensity))
}
