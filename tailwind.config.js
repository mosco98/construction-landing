/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Krona One"
      },
      colors: {
        primary: "#000000",
        ash: "#434343"
      }
    }
  },
  plugins: []
}
