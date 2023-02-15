/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      montserratBold: ["Montserrat Bold"],
      poppins: ["Poppins"],
      poppinsBold: ["Poppins Bold"],
      poppinsMedium: ["Poppins Medium"],
    },

    extend: {
      colors: {
        brand: {
          100: "#5377FF",
          200: "#3A57C0",
          300: "#5D72FB",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
