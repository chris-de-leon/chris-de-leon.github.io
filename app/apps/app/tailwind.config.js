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
        DEFAULT: '200px',
      },
    },
    extend: {
      colors: {
        primary: '#cef3f5',
        secondary: '#9154f8',
        'text-bg-1': '#cef3f5',
        'text-bg-2': '#ffffff',
        'text-bg-3': '#0a1d42',
        'text-bg-4': '#29272c',
        'accent-1': '#c8aef8',
        'accent-2': '#878fff',
        'accent-3': '#9154f8',
        'accent-4': '#35c2df',
        'accent-5': '#ca7beb',
        'accent-6': '#972cb4',
        link: '#cef3f5',
      },
      fontFamily: {
        sans: ['Oswald', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
