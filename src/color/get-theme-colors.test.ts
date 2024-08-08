import { describe, expect, it } from 'vitest'
import { getThemeColors } from './get-theme-colors'

describe('theme-colors', () => {
  const fixture = {
    hex: '#64748B',
    rgb: '100 ,116, 139 ',
    theme: {
      50: '#F7F8F9',
      100: '#F0F1F3',
      200: '#D8DCE2',
      300: '#C1C7D1',
      400: '#939EAE',
      500: '#64748B',
      600: '#5A687D',
      700: '#3C4653',
      800: '#2D343F',
      900: '#1E232A',
      950: '#14171C',
    },
  }

  it('getThemeColors (hex)', () => {
    expect(getThemeColors(fixture.hex)).toMatchObject(fixture.theme)
  })

  it('getThemeColors (rgb)', () => {
    expect(getThemeColors(fixture.rgb)).toMatchObject(fixture.theme)
  })

  it('getThemeColors (invalid)', () => {
    expect(() => getThemeColors('red')).toThrowError(/Invalid color format!/)
  })
})
