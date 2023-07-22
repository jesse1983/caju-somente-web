/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Libre Franklin', 'system-ui'],
    },
    extend: {
      margin: {
        neo1: '-50vh',
        neo2: '-25vh',
      },
      height: {
        screen: 'calc(var(--vh, 1vh) * 100)',
      }
    },
    extend: {
      colors: {
        slate: {
          30: '#ffffff',
        },
        crimson: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e80536',
          400: '#c9042f',
          500: '#b3042a',
          600: '#910423',
          700: '#75041d',
          800: '#570316',
          900: '#30010c',
        },
      }
    },
  },
  plugins: [],
}
