class Node<ValueType> {
  value: ValueType
  next?: Node<ValueType>

  constructor(value: ValueType) {
    this.value = value
  }
}

export class Queue<ValueType> implements Iterable<ValueType> {
  private _head?: Node<ValueType>
  private _tail?: Node<ValueType>
  private _length: number

  /**
   * Tiny queue data structure.
   *
   * Creates an instance of a queue.
   *
   * @example
   * ```
   * const queue = new Queue();
   *
   * queue.enqueue('a');
   * queue.enqueue('b');
   *
   * console.log(queue.length);
   * //=> 2
   *
   * console.log(...queue);
   * //=> 'a b'
   *
   * console.log(queue.dequeue());
   * //=> 'a'
   *
   * console.log(queue.dequeue());
   * //=> 'b'
   * ```
   */
  constructor() {
    this._head = undefined
    this._tail = undefined
    this._length = 0
  }

  /**
   * Adds a value to the queue.
   *
   * @param {ValueType} value - The value to add.
   */
  enqueue(value: ValueType): void {
    const node = new Node(value)

    if (this._tail) {
      this._tail.next = node
      this._tail = node
    }
    else {
      this._head = node
      this._tail = node
    }

    this._length++
  }

  /**
   * Remove the next value in the queue.
   *
   * @returns {ValueType | undefined} The removed value or `undefined` if the queue is empty.
   */
  dequeue(): ValueType | undefined {
    if (!this._head) {
      return undefined
    }

    const current = this._head
    this._head = this._head.next
    this._length--

    if (this.isEmpty()) {
      this._tail = undefined
    }

    return current.value
  }

  /**
   * Get the next value in the queue without removing it.
   *
   * @returns {ValueType | undefined} The value or `undefined` if the queue is empty.
   */
  peek(): ValueType | undefined {
    return this._head?.value
  }

  /**
   * Clear the queue.
   */
  clear(): void {
    this._head = undefined
    this._tail = undefined
    this._length = 0
  }

  /**
   * @returns {number} The length of the queue.
   */
  get length(): number {
    return this._length
  }

  /**
   * @returns {boolean} Whether or not the queue is empty.
   */
  isEmpty(): boolean {
    return this._length === 0
  }

  /**
   * Returns an iterator for the queue.
   *
   * Allows you to use a for...of loop to iterate over the queue.
   *
   * @returns {IterableIterator<ValueType>} An iterator for the queue.
   */
  *[Symbol.iterator](): IterableIterator<ValueType> {
    let current = this._head

    while (current) {
      yield current.value
      current = current.next
    }
  }
}
