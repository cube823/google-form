const theme = {
  colors: {
    white: '#fff',
    black: 'rgb(32,33,36)',

    purple_light: '#f0ebf8',
    purple_dark: '#673ab7',

    grey_lighter: 'rgb(218,220,224)',
    grey_light: 'rgb(112, 117, 121)',
    grey_dark: '#707579',
    grey_darker: 'rgb(95, 99, 104)',

    blue_lighter: '#1a73e8',
    blue_light: '#4285f4',

    red_light: 'rgb(217,48,37)',
  },
}

export type Color = keyof typeof theme.colors

export default theme
