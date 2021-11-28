module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'form-color': "#e76f3d",
      'empty-block': "#00a7c7",
      'table-color': "#9bcfe0",
      'mate-color': "#feab6b",
      'not-white': "#f0eeef"
    }),
    textColor: theme => ({
      ...theme('colors'),
      'empty-text-color': "#e76f3d",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
