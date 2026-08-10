import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      colors: {

        background: "#050505",

        surface: "#0B0D0F",

        primary: "#5B8CFF",

        secondary: "#9B7BFF",

        accent: "#64E8FF",

      },


      borderColor: {

        glass:
          "rgba(255,255,255,0.08)",

      },


      boxShadow: {

        glow:
          "0 0 40px rgba(91,140,255,0.35)",

        purpleGlow:
          "0 0 40px rgba(155,123,255,0.35)",

      },


      backdropBlur: {

        glass:
          "20px",

      },


      borderRadius: {

        glass:
          "24px",

      },

    },
  },

  plugins: [],
};

export default config;