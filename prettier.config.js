module.exports = {
  plugins: [
    require('@trivago/prettier-plugin-sort-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  tailwindConfig: 'tailwind.config.js',
};
