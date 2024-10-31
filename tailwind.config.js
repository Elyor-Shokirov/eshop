/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserat: "Montserrat, sans-serif",
      },
      backgroundImage: {
        cardSectionBgImage: "url('./public/img/Placeholder.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
