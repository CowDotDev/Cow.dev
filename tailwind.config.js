const defaultTheme = require('tailwindcss/defaultTheme');

// Extend TailwindCSS Configuration
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [ require('@tailwindcss/ui') ]
};