import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Objective", "sans-serif"],
      },
      colors: {
        yellow: {
          '1': "#ffd362"
        },
        blue: {
          '1': "#2f44bf"
        },
        pink: {
          "1": "#ffecf1"
        }
      },
      // animation: {
      //   "shape-slow": "shape 3s linear infinite alternate",
      //   "shape-fast": "shape 1s linear infinite"
      // }
    },
  },
  plugins: [],
} satisfies Config;
