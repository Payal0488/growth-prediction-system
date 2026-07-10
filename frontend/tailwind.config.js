/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#D9E5D6',
        clay: '#E7D7C9',
        sageCta: '#A3B18A',
        ink: '#2F3A32',
        borderLight: '#E5DDD3',
        chartAccent: '#CBBBA0',
      },
    },
  },
  plugins: [],
};
