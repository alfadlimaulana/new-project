import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "7rem",
      },
    },
    extend: {
      scale: {
        '-100': '-1',
      },
      colors: {
        brand: {
          pink: {
            light: "#F2EBE9",
            base: "#EDDCD9",
            dark: "#DE5499",
          },
          blue: "#264143",
          orange: "#E99F4C",
        },
      },
      fontFamily: {
        sans: ["lato", ...defaultTheme.fontFamily.sans],
        tantinotes: "tantinotes",
        georgia: "georgia",
        maratre: "maratre",
      },
    },
  },
  plugins: [],
};
