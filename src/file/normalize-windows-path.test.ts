import { describe, expect, it } from 'vitest'
import { normalizeWindowsPath } from './normalize-windows-path'

describe('normalizeWindowsPath', () => {
  it('should normalize backslashes to forward slashes', () => {
    expect(normalizeWindowsPath('c:\\Users\\Documents')).toBe('C:/Users/Documents')
    expect(normalizeWindowsPath('d:/projects\\my-project')).toBe('D:/projects/my-project')
    expect(normalizeWindowsPath('E:\\Folder\\Subfolder\\file.txt')).toBe('E:/Folder/Subfolder/file.txt')
  })

  it('should handle empty string', () => {
    expect(normalizeWindowsPath('')).toBe('')
  })

  it('should handle already normalized paths', () => {
    expect(normalizeWindowsPath('C:/Users/Documents')).toBe('C:/Users/Documents')
    expect(normalizeWindowsPath('D:/projects/my-project')).toBe('D:/projects/my-project')
    expect(normalizeWindowsPath('E:/Folder/Subfolder/file.txt')).toBe('E:/Folder/Subfolder/file.txt')
  })

  it('should normalize drive letter to uppercase', () => {
    expect(normalizeWindowsPath('c:/Users/Documents')).toBe('C:/Users/Documents')
    expect(normalizeWindowsPath('d:/projects/my-project')).toBe('D:/projects/my-project')
    expect(normalizeWindowsPath('e:/Folder/Subfolder/file.txt')).toBe('E:/Folder/Subfolder/file.txt')
  })

  it('should handle mixed case drive letters and backslashes', () => {
    expect(normalizeWindowsPath('c:\\Users\\Documents')).toBe('C:/Users/Documents')
    expect(normalizeWindowsPath('D:\\projects\\my-project')).toBe('D:/projects/my-project')
    expect(normalizeWindowsPath('e:\\Folder\\Subfolder\\file.txt')).toBe('E:/Folder/Subfolder/file.txt')
  })
})
