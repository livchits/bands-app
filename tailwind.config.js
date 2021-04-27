module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
