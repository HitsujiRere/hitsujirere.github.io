module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  importOrder: [
    '^react(/.*)?$',
    '^next(/.*)?$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  tailwindConfig: 'tailwind.config.js',
};
