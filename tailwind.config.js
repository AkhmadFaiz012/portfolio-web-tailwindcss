/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        primary : '#2563EB',
        secondary : '#F97316',
        accent : '#DC2626',
        white : '#FAFAFA',
        dark : '#0A0A0A'
      },
      fontfamily:{
        poppins : ['poppins','sans-serif'],
        outfit : ['outfit', 'sans-serif']
      },
      container : {
        center : true,
        padding : '1rem',
        screens : {
          sm : '600px',
          '2xl': '1124px'
        }
      }
    },
  },
  plugins: [],
}

