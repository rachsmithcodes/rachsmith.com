module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      headings: ['Ubuntu', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
