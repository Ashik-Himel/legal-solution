/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        garamond: "'EB Garamond', serif",
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        primary: '#B68C5A',
        title: '#414040',
        dark: '#707070',
        'hero-para': '#E7E7E7',
        'review-para': '#F3F3F3',
        'footer-para': '#CFCFCF',
        'card-bg': '#F3F3F3',
        'footer-bg': '#111111'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}