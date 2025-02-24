/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "italian-green": "#008C45",
        "italian-white": "#F4F5F0",
        "italian-red": "#CD212A",
        pasta: "#F2D680",
        olive: "#556B2F",
        wine: "#722F37",
        mediterranean: "#1A5276",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
