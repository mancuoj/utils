import { fileURLToPath } from 'node:url'

export function toPath(path: URL | string): string {
  return path instanceof URL ? fileURLToPath(path) : path
}
