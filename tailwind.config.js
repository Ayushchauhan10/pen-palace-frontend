/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: '#4DCAF9',
        textColor: '#E3E8EF',
        navyBlue: '#11172A',
        lightNavy: '#355584',
        lightText: '#A7B3F6'
      },
      boxShadow:{
        shadowOne: "20px 20px 29px #11172A, -20px -20px 29px #11172A",
      }
    },
  },
  plugins: [],
}
