/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '390px',
      md: '700px',
      lg: '992px',
      xl: '1025px',
      xxl: '1280px',
    },
  },
  plugins: [],
};
