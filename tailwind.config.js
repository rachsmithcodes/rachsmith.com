module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Ilisarniq-Light', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      demi: ['Ilisarniq-Demi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
