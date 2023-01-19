/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1721",
        info: "#3E5C72",
        nav: "#2e2e2e",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
  },
  plugins: [
      require('@tailwindcss/forms')(),
  ],
}
