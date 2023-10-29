/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "340px",
      // => @media (min-width: 340px) { ... }

      sm: "325px",
      // => @media (min-width: 540px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      steel_blue: "hsl(218, 33%, 77%)",
      royal_blue: "hsl(225, 68%, 53%)",
      flickr_blue: "hsla(225, 68%, 53%, 0.3)",
      carolina_blue: "hsl(201, 92%, 47%)",
      oxford_blue: "hsl(218, 70%, 18%)",
      oxford_blue_2: "hsl(217, 100%, 12%)",
      oxford_blue_3: "hsl(218, 71%, 11%)",
      gainsboro_50: "hsla(0, 0%, 85%, 0.5)",
      lavender_web: "hsl(225, 67%, 91%)",
      sonic_silver: "hsl(0, 0%, 47%)",
      light_gray: "hsl(0, 0%, 84%)",
      cultured: "hsl(0, 0%, 97%)",
      black_10: "hsla(0, 0%, 0%, 0.1)",
      black_8: "hsla(0, 0%, 0%, 0.08)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      jet: "hsl(0, 0%, 20%)",
    },
    boxShadow: {
      shadow_1: "4px 4px 15px black_10",
      shadow_2: "0 10px 15px black_10",
      shadow_3: "0px 20px 60px black_8",
      shadow_4: "0px 10px 30px flickr_blue",
      shadow_5: "0px 2px 60px 0px black_10",
    },

    extend: {
      backgroundImage: {
        hero: "url(./Assets/hero-bg.png)",
      },
    },
  },
};
