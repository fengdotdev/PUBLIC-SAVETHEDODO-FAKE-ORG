/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "primary": "#92140cff",
        "dark": "#1e1e24ff",
        "light": "#fff8f0ff",
      },

    },
  },
  plugins: [],
};
