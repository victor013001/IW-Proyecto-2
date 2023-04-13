/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'ml-yellow-bg': '#FFF159',
      'ml-gray-bg': '#EBEBEB',
      'ml-gray-light': '#D9D9D9',
      'ml-gray': '#666666',
      'ml-yellow-dark': '#857F42',
      'ml-green': '#00A650',
      'ml-gradient': 'linear-gradient(90deg, #A90F90 55%, #0C1A51 100%)',
      'ml-blue': '#3483FA',
      'ml-mid-black': '#333333',
      'ml-black-light': '#4B4B4B',
    },
  },
  plugins: [],
};
