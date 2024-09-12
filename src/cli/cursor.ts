export const ESC = '\x1B'
export const CSI = `${ESC}[`
export const beep = '\x07'

export const cursor = {
  /**
   * Move cursor to the left side.
   */
  left: `${CSI}G`,

  /**
   * Hide cursor.
   */
  hide: `${CSI}?25l`,

  /**
   * Show cursor.
   */
  show: `${CSI}?25h`,

  /**
   * Save cursor position.
   */
  save: `${ESC}7`,

  /**
   * Restore cursor position.
   */
  restore: `${ESC}8`,

  /**
   * Move cursor up a specific amount of rows. Default is 1.
   */
  up: (count = 1) => `${CSI}${count}A`,

  /**
   * Move cursor down a specific amount of rows. Default is 1.
   */
  down: (count = 1) => `${CSI}${count}B`,

  /**
   * Move cursor forward a specific amount of columns. Default is 1.
   */
  forward: (count = 1) => `${CSI}${count}C`,

  /**
   * Move cursor backward a specific amount of columns. Default is 1.
   */
  backward: (count = 1) => `${CSI}${count}D`,

  /**
   * Move cursor to the next line a specific amount of lines. Default is 1.
   */
  nextLine: (count = 1) => `${CSI}E`.repeat(count),

  /**
   * Move cursor to the previous a specific amount of lines. Default is 1.
   */
  prevLine: (count = 1) => `${CSI}F`.repeat(count),

  /**
   * Set the absolute position of the cursor. `x0 y0` is the top left of the screen.
   * The `y` is optional. If not provided, `x` is used to set the column.
   */
  to: (x: number, y?: number) => {
    if (!y) {
      return `${CSI}${x + 1}G`
    }
    return `${CSI}${y + 1};${x + 1}H`
  },

  /**
   * Set the position of the cursor relative to its current position.
   */
  move: (x: number, y: number) => {
    let res = ''

    if (x < 0)
      res += `${CSI}${-x}D`
    else if (x > 0)
      res += `${CSI}${x}C`

    if (y < 0)
      res += `${CSI}${-y}B`
    else if (y > 0)
      res += `${CSI}${y}A`

    return res
  },
}
