function rem(target, context = 16) {
  const targetValue = target.split('px')[0]
  const value = targetValue / context
  return String(`${value}rem`)
}

const theme = {
  breakpoints: {
    sm: rem('480px'),
    md: rem('768px'),
    lg: rem('1024px'),
    xl: rem('1350px'),
  },
  colors: {
    primary: '#e27533',
    error: '#d85862',
    success: '#007a41',
    warning: '#b27f05',
    bg: '#121212',
    fg: '#FFFFFF',
    black: '#000000',
    white: '#ffffff',
    neutrals: {
      100: '#f2f2f2',
      200: '#efefef',
      300: '#d4d4d4',
      400: '#bcbcbc',
      500: '#909090',
      600: '#6f6f6f',
      700: '#414141',
      800: '#232323',
      900: '#121212',
    },
  },
  fonts: {
    base: "'Work Sans', sans-serif",
    heading: "'Work Sans', sans-serif",
    title: "'Bebas Neue', sans-serif",
  },
  fontSizes: {
    base: rem('18px'),
    xxs: rem('10px'),
    xs: rem('12px'),
    s: rem('14px'),
    l: rem('24px'),
    xl: rem('24px'),
    hero: rem('70px'),
    h1: rem('48px'),
    h2: rem('40px'),
    h3: rem('28px'),
    h4: rem('20px'),
  },
  fontWeights: {
    normal: '400',
    yld: '700',
    semibold: '600',
  },
  lineHeights: {
    base: '1.5',
    heading: '1.2',
  },
  radii: {
    base: rem('6px'),
  },
  shadows: {
    base: '0 2px 3px rgba(0, 0, 0, 0.15)',
  },
  space: {
    base: rem('20px'),
    xs: rem('5px'),
    s: rem('10px'),
    l: rem('40px'),
    xl: rem('60px'),
  },
}

export default theme
