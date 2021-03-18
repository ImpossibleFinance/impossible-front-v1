import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#0074FF',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#050A5A',
  success: '#31D0AA',
  warning: '#FFB237',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#FAF9FA',
  backgroundDisabled: '#E9EAEB',
  contrast: '#191326',
  invertedContrast: '#FFFFFF',
  input: '#eeeaf4',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#050A5A',
  textDisabled: '#BDC2C4',
  textSubtle: '#050A5A',
  borderColor: '#E9EAEB',
  card: '#FFFFFF',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #00DAFF 0%, #00FFB9 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#9A6AFF',
  background: '#050A5A',
  backgroundDisabled: '#3c3742',
  contrast: '#FFFFFF',
  invertedContrast: '#191326',
  input: '#483f5a',
  inputSecondary: '#66578D',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: 'white',
  textDisabled: '#666171',
  textSubtle: 'white',
  borderColor: '#524B63',
  card: '#27262c',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
  },
}
