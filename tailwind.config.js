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
      boxShadow: {
        bottomNavigateShadow: "0 -4px 8px #0000000f",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
