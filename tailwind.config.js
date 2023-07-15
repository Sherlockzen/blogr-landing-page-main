/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      //PRIMARY
      light_red: "hsl(356, 100%, 66%)",
      very_light_red: "hsl(355, 100%, 74%)",
      very_dark_blue: "hsl(208, 49%, 24%)",
      //NEUTRAL
      white: "hsl(0, 0%, 100%)",
      grayish_blue: "hsl(240, 2%, 79%)",
      very_dark_grayish_blue: "hsl(207, 13%, 34%)",
      very_dark_black_blue: "hsl(240, 10%, 16%)",
      //BACKGROUND GRADIENT - INTRO/CTA MOBILE NAV
      very_light_red: "hsl(13, 100%, 72%)",
      light_red: "hsl(353, 100%, 62%)",
      //BACKGROUND GRADIENT - body
      very_dark_gray_blue: "hsl(237, 17%, 21%)",
      very_dark_desaturated_blue: "hsl(237, 23%, 32%)",
    },
    extend: {},
  },
  plugins: [],
};
