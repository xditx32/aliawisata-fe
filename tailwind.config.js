/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '50px',
        xl: '100px'
      }
    },
    extend: {
      colors: {
        'dark-indigo': '#0D0322',
        primary: '#003e88',
        secondary: '#01a83e',
        'butter-yellow': '#F7FF82',
        'lavender-pink': '#DF82CB',
        'persian-pink': '#DF82CA',
        'iron-grey': '#DAD5E4',
        'pastel-purple': '#A99FBD',
        'bluish-purple': '#38255F',
        'smoke-purple': '#A497BE'
      }
    }
  },
  plugins: []
};
