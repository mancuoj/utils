import { test, expect } from 'bun:test'
import { greet } from '../src'

test('should greet correctly', () => {
  expect(greet('World')).toBe('Hello, World!')
})
