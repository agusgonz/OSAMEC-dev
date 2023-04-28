/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryCol: '#1B262C',
        darkBlueCol: '#0F4C75',
        blueCol: '#3282B8',
        lightBlueCol: '#BBE1FA',
        orange: '#EF7C12',
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [],
}
