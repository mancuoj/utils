import { CSI, cursor } from './cursor'

export const erase = {
  /**
   * Erase the screen and move the cursor the top left position.
   */
  screen: `${CSI}2J`,

  /**
   * Erase the entire current line.
   */
  line: `${CSI}2K`,

  /**
   * Erase from the current cursor position to the end of the current line.
   */
  lineEnd: `${CSI}K`,

  /**
   * Erase from the current cursor position to the start of the current line.
   */
  lineStart: `${CSI}1K`,

  /**
   * Erase the screen from the current line up to the top of the screen. Default to 1.
   */
  up: (count = 1) => `${CSI}1J`.repeat(count),

  /**
   * Erase the screen from the current line down to the bottom of the screen. Default to 1.
   */
  down: (count = 1) => `${CSI}J`.repeat(count),

  /**
   * Erase from the current cursor position up the specified amount of rows.
   */
  lines(count: number) {
    let clear = ''
    for (let i = 0; i < count; i++)
      clear += this.line + (i < count - 1 ? cursor.up() : '')
    if (count)
      clear += cursor.left
    return clear
  },
}
