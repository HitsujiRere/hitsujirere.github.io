const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-z-0': {
          transform: 'rotateY(0)',
        },
        '.rotate-z-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }),
  ],
};
