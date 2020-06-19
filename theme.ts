const pallete = {
  black: '#000000',
  greyDark: '#323232',
  greyLight: '#464646',
  red: '#FF1E56',
  white: '#FFFFFF',
  yellow: '#FFAC42',
}

const colors = {
  textDefault: pallete.white,
  textGrey: pallete.greyDark,
  textRed: pallete.red,
  textYellow: pallete.yellow,

  cardGrey: pallete.greyDark,
  cardRed: pallete.red,
  cardWhite: pallete.white,

  walkProgressBackground: pallete.greyLight,
  walkProgressColor: pallete.yellow,
}
export type Color = keyof typeof colors

const fontSizes = {
  medium: '16px',
  large: '32px',
}
export type FontSize = keyof typeof fontSizes

const fontFamilies = {
  light: 'Catamaran-Light',
  regular: 'Catamaran-Regular',
  bold: 'Catamaran-Bold',
}
export type FontFamily = keyof typeof fontFamilies

const space = {
  small: '4px',
  medium: '12px',
  large: '36px',
}
export type Space = keyof typeof space

export interface Theme {
  colors: {[key in Color]: string}
  fontSizes: {[key in FontSize]: string}
  fontFamilies: {[key in FontFamily]: string}
  space: {[key in Space]: string}
}

const theme: Theme = {
  colors,
  fontSizes,
  fontFamilies,
  space,
}

export default theme
