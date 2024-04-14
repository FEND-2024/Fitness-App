module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },

      colors: {
        "fitness-color-dark": "#202430",
        "fitness-color-medium": "#3A4151",
        "fitness-color-light": "#202430",
        "fitness-color-grandis": "#FFCC6A",
        "fitness-color-light-pink": "#FE9EB9",
        "fitness-color-turkis": "#4CF4E2",
        "fitness-color-mint": "#EDFDA8",
        "fitness-color-blue": "#3B5FE5",
      },
    },
  },
  plugins: [],
};
