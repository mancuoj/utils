import { beforeEach, describe, expect, it } from 'vitest'
import { Queue } from './queue'

describe('queue', () => {
  let queue: Queue<string>

  beforeEach(() => {
    queue = new Queue<string>()
  })

  it('should initialize with length 0', () => {
    expect(queue.length).toBe(0)
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('should enqueue items and increase length', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    expect(queue.length).toBe(2)
    expect(queue.isEmpty()).toBeFalsy()
  })

  it('should dequeue items in FIFO order', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    expect(queue.dequeue()).toBe('a')
    expect(queue.dequeue()).toBe('b')
  })

  it('should return undefined when dequeue from empty queue', () => {
    expect(queue.dequeue()).toBeUndefined()
  })

  it('should peek the next item without removing it', () => {
    queue.enqueue('a')
    expect(queue.peek()).toBe('a')
    expect(queue.length).toBe(1)
  })

  it('should return undefined when peeking into an empty queue', () => {
    expect(queue.peek()).toBeUndefined()
  })

  it('should clear the queue', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.clear()
    expect(queue.length).toBe(0)
    expect(queue.peek()).toBeUndefined()
  })

  it('should be iterable', () => {
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    const values = [...queue]
    expect(values).toEqual(['a', 'b', 'c'])
  })
})
