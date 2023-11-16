/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  colors: {
    purple: '#A486E4',
    blueLight: '#86DEE4b',
    blue: '#86ACE4',
    green: '#86E4B1',
    grayLight: '#D8E8F2',
    white: 'FFFFFF',
  },
  fontFamily: {
    sans: ['Oxygen', sans - serif],
    sans: ['Quicksand', sans - serif],
  },
  fontSize: {
    xs: ['1rem'],
    sm: ['1.25rem'],
    med: ['1.5rem'],
    base: ['2rem'],
    lg: ['2.5rem'],
    xl: ['4rem'],
  },
  borderRadius: {
    none: '0px',
    xs: '0.125rem',
    s: '0.3125rem',
    DEFAULT: '0.625',
    circle: '5rem',
    med: '1.25rem',
    lg: '1.5625rem',
    xl: '1.875rem',
    xxl: '2.5rem',
    xxxl: '3.125rem',
    xxxxl: '4.6875rem',
    full: '9999px',
  },
  spacing: {
    theme: {
      spacing: {
        1: '32px',
        2: '40px',
        3: '89px',
        4: '95px',
        5: '100px',
        6: '119px',
        7: '160px',
        8: '212px',
        9: '520px',
      },
    },
  },
  plugins: [],
};
