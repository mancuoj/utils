import { cursor } from './cursor'

describe('cursor', () => {
  it('should return the correct escape code', () => {
    expect(cursor.left).toBe('\x1B[G')
    expect(cursor.hide).toBe('\x1B[?25l')
    expect(cursor.show).toBe('\x1B[?25h')
    expect(cursor.save).toBe('\x1B7')
    expect(cursor.restore).toBe('\x1B8')
    expect(cursor.up()).toBe('\x1B[1A')
    expect(cursor.down()).toBe('\x1B[1B')
    expect(cursor.forward()).toBe('\x1B[1C')
    expect(cursor.backward()).toBe('\x1B[1D')
    expect(cursor.nextLine()).toBe('\x1B[E')
    expect(cursor.prevLine()).toBe('\x1B[F')
    expect(cursor.up(1)).toBe('\x1B[1A')
    expect(cursor.down(2)).toBe('\x1B[2B')
    expect(cursor.forward(3)).toBe('\x1B[3C')
    expect(cursor.backward(4)).toBe('\x1B[4D')
    expect(cursor.nextLine(2)).toBe('\x1B[E\x1B[E')
    expect(cursor.prevLine(3)).toBe('\x1B[F\x1B[F\x1B[F')
    expect(cursor.to(2)).toBe('\x1B[3G')
    expect(cursor.to(1, 1)).toBe('\x1B[2;2H')
    expect(cursor.move(1, 1)).toBe('\x1B[1C\x1B[1A')
    expect(cursor.move(0, 0)).toBe('')
    expect(cursor.move(-2, -1)).toBe('\x1B[2D\x1B[1B')
  })
})
