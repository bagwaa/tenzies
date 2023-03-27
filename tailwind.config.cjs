/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B2434',
      },
      fontFamily: {
        karla: ['"Karla"', 'mono'],
        inter: ['Inter', 'mono'],
      },
    },
  },
  plugins: [],
}
