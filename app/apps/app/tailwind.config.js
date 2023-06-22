const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '90px',
        lg: '200px',
      },
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#f74cfc',
        'text-bg-1': '#232222',
        'text-bg-2': '#ffffff',
        'text-bg-3': '#ff00ff',
        'text-bg-4': '#02edfd',
        'accent-1': '#1d0121',
        'accent-2': '#a17ae9',
        'accent-3': '#9effff',
        'accent-4': '#f74cfc',
        'accent-5': '#ffffff',
        'accent-6': '#ffffff',
        link: '#ffffff',
      },
      fontFamily: {
        sans: ['Krona One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
