import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#050A5A',
  primaryBright: '#E8EEFF',
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
  background: '#F2F4F5',
  backgroundDisabled: '#E9EAEB',
  contrast: '#A6A8AA',
  invertedContrast: '#FFFFFF',
  input: '#F2F4F5',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  text: '#3B4346',
  textDisabled: '#FFFFFF',
  textSubtle: '#616568',
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
