const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
  variants: {
      scrollbar: ['rounded']
  }
};
