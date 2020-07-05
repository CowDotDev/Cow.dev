const defaultTheme = require('tailwindcss/defaultTheme');

// Extend TailwindCSS Configuration
module.exports = {
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      minHeight: {
        ...defaultTheme.spacing
      }
    }
  },
  plugins: [ require('@tailwindcss/ui') ]
};