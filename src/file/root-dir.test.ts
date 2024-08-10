import { rootDir } from './root-dir'

describe('rootDir', () => {
  it('should return the root directory of the given path', () => {
    if (process.platform === 'win32') {
      expect(rootDir('C:\\Users\\mancuoj')).toBe('C:\\')
    }
    else {
      expect(rootDir('/users/mancuoj')).toBe('/')
    }
  })
})
