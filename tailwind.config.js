/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: { 
    container: { center: true },
    extend: 
      {
        backgroundImage: {
        mainGradient: "linear-gradient(to right, #51327d, #a03c80, #db5673)",
      },
      colors: {
        primary: {
          DEFAULT: '#ea5d7bff',
          light: '#eaf1ff',
          'dark-light': 'rgba(67,97,238,.15)',
        },
        secondary: {
          DEFAULT: '#ea5d7bff',
          light: '#ebe4f7',
          'dark-light': 'rgb(128 93 202 / 15%)',
        },
        success: {
          DEFAULT: '#00ab55',
          light: '#ddf5f0',
          'dark-light': 'rgba(0,171,85,.15)',
        },
        danger: {
          DEFAULT: '#e7515a',
          light: '#fff5f5',
          'dark-light': 'rgba(231,81,90,.15)',
        },
        warning: {
          DEFAULT: '#e2a03f',
          light: '#fff9ed',
          'dark-light': 'rgba(226,160,63,.15)',
        },
        info: {
          DEFAULT: '#2196f3',
          light: '#e7f7ff',
          'dark-light': 'rgba(33,150,243,.15)',
        },
        dark: {
          DEFAULT: '#3b3f5c',
          light: '#eaeaec',
          'dark-light': 'rgba(59,63,92,.15)',
        },
        black: {
          DEFAULT: '#0e1726',
          light: '#e3e4eb',
          'dark-light': 'rgba(14,23,38,.15)',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#e0e6ed',
          dark: '#888ea8',
        },
        darkPurple: {
          DEFAULT: '#51327d'
        },
        lightPurple: {
          DEFAULT: '#b60e81ff'
        },  
        pink: {
          DEFAULT: '#ea5d7bff'
        },
        darkPink: {
          DEFAULT: '#ce516cff'
        },
        orange: {
          DEFAULT: '#fe8461'
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      spacing: { 4.5: '18px' },
      boxShadow: { '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)' }
    },
   },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/typography'),
      
    function ({ addComponents }) {
      addComponents({
        '.btn-main': {
          '@apply bg-pink hover:bg-darkPink rounded text-xs p-2 font-bold text-white transition-all duration-300': {}
        },
        '.btn-aux': {
          '@apply bg-gray-200 hover:bg-gray-300 rounded text-xs p-2 font-semibold border border-gray-300 transition-all duration-300': {}
        },
        '.navbar-link': {
          '@apply cursor-pointer hover:text-lightPurple hover:font-bold transition-all duration-300': {} 
        }, 
        '.footer-link': {
          '@apply transition-transform duration-200 transform hover:scale-105': {}
        },
        '.link-active': {
          '@apply font-bold text-transparent bg-clip-text bg-mainGradient cursor-pointer': {}
        },
      })
    }
  ],
}