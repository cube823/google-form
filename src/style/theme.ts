const theme = {
  colors: {
    white: '#fff',
    black: 'rgb(32,33,36)',

    purple_light: '#f0ebf8',
    purple_dark: '#673ab7',

    gray: '#5f6368',
    gray_lighter: 'rgb(218,220,224)',
    gray_light: 'rgb(112, 117, 121)',
    gray_dark: '#707579',
    gray_darker: 'rgb(95, 99, 104)',

    blue_lighter: '#1a73e8',
    blue_light: '#4285f4',

    red_light: 'rgb(217,48,37)',
  },
}

export type Color = keyof typeof theme.colors

export default theme
