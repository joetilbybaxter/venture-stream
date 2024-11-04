/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
      extend: {
          fontFamily: {
            body: ['"Plus Jakarta Sans"', 'sans-serif'], // Here I attempted to add the font as an extention of the theme, but I could not get it to update on the front end.
          }
      },
  },
  plugins: [],
}
