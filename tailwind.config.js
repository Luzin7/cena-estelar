/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorText: '#ffffff',
        colorText2: '#e5e5e5',
        colorTextSecondary: '#808080',
        colorTextHover: '#b4b4b4',
        colorBg: '#141414',
        colorBgSecondary: '#222222',
        colorPrimary: '#8209d1',
        colorSecondary: '#ffffff',
        colorAccent: '#c3c2b1',
      },
    },
  },
  plugins: [],
};
