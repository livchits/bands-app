module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
      },
      backgroundImage: {
        show: 'url("https://source.unsplash.com/jfU3_67YiwQ/full")',
      },
    },
  },
  variants: {
    extend: { ringWidth: ['hover', 'active'], textColor: ['active'] },
    plugins: [require('@tailwindcss/forms')],
  },
};
