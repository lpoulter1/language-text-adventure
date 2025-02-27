/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "italian-green": "#008C45",
        "italian-white": "#F4F5F0",
        "italian-red": "#CD212A",
        "neon-pink": "#FF00FF",
        "neon-purple": "#9900FF",
        "neon-blue": "#00FFFF",
        "neon-yellow": "#FFFF00",
        "neon-green": "#00FF00",
        "neon-orange": "#FF6600",
        "hot-pink": "#FF1493",
        "electric-blue": "#0000FF",
        "cyber-black": "#0D0221",
        "brighton-blue": "#00AAFF",
        "brighton-white": "#FFFFFF",
        "leisure-purple": "#9933CC",
        "leisure-pink": "#FF69B4",
        pasta: "#F2D680",
        olive: "#556B2F",
        wine: "#722F37",
        mediterranean: "#1A5276",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
        cyber: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        "neon-pink":
          "0 0 3px rgba(255, 0, 255, 0.6), 0 0 7px rgba(255, 0, 255, 0.4), 0 0 10px rgba(255, 0, 255, 0.2)",
        "neon-blue":
          "0 0 3px rgba(0, 255, 255, 0.6), 0 0 7px rgba(0, 255, 255, 0.4), 0 0 10px rgba(0, 255, 255, 0.2)",
        "neon-purple":
          "0 0 3px rgba(153, 0, 255, 0.6), 0 0 7px rgba(153, 0, 255, 0.4), 0 0 10px rgba(153, 0, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
