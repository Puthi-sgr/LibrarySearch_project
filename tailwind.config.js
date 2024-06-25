/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-color)'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
      
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },

        /* Scrollbar width for Firefox */
        '.scrollbar-hide': {
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        },

        /* Customize scrollbar for Chrome, Safari and Opera */
        '.scrollbar-custom::-webkit-scrollbar': {
          width: '12px',
        },
        '.scrollbar-custom::-webkit-scrollbar-track': {
          borderRadius: '8px',
          background: '#EBE7E7',
        },
        '.scrollbar-custom::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '10px',
        },
        '.scrollbar-custom::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
}

