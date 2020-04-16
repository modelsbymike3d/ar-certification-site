// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
  corePlugins: {
    fontFamily: false,
  },
}
