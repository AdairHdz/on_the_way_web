module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "active"],
      borderColor: ["checked"],
      textColor: ["checked"]
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
