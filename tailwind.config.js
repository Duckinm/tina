module.exports = {
  content: ['{pages,components}/**/*.{tsx}'],
  darkMode: 'media', // false or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
