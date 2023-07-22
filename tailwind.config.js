/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'c-blue':'var(--c-blue)'
      },
      fontSize:{
        '36': '2.25rem'
      }
    },
  },
  plugins: [
    require('postcss-nested'),
  ],
}

