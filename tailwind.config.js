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
        darkBlueCol: '#00587c',
        blueCol: '#3282B8',
        lightBlueCol: '#BBE1FA',
        orangeCol: '#ff8200',
        grayCol:'#eefcff77',
      },
      backdropBlur: {
        xs: '2px'
      },
      keyframes: {
        dividermoveLeft: {
          '0%': { transform: 'translate(0px)' },
          '100%': { transform: 'translate(-30px, 0px)' },
        },
        dividermoveRight: {
          '0%': { transform: 'translate(-30px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        }
      },
      animation: {
        'divider-animation-left': 'dividermoveLeft 3s linear infinite',
        'divider-animation-right': 'dividermoveRight 3s linear infinite',
      }
    }
  },
  plugins: [],
  safelist: [
    'bg-green-500',
    'bg-gray-600',
    'bg-blue-600',
    'bg-purple-700',
  ]
}
