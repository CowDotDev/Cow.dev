const defaultTheme = require('tailwindcss/defaultTheme');

// Extend TailwindCSS Configuration
const tailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [ require('@tailwindcss/ui') ]
};

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindConfig),
    require('autoprefixer')
  ]
}