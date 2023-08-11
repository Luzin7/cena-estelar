/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: '#1b141f',
        textSecondary: '#545454',
        background: '#ffffff',
        primary: '#8109d1',
        secondary: '#cfcfcf',
        accent: '#532a6f',
      },
    },
  },
  plugins: [],
};
