module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        teal: '1px solid #57FFF5',
      },
      fontSize: { '9xl': '6.5rem' },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        valhalla: {
          light: '#2A314B',
          deep: '#2C3248',
          blue: '#242743',
          mirage: '#1E1E3A',
          midnight: '#201d3c',
          DEFAULT: '#272A3E',
        },
        clay: {
          DEFAULT: '#404069',
        },
        teal: {
          light: '#43F1E7',
          DEFAULT: '#57FFF5',
          lightDark: '#3BDAD1',
          dark: '#31CEC5',
          xdark: '#1AA39A',
        },
        textShadow: {
          teal: '1px 1px 4px #31CEC5',
        },
      },
      animation: {
        fade: 'fadeIn 300ms ease-in',
      },
      keyframes: (theme) => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
