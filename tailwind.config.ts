import type { Config } from "tailwindcss";

export default {
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "5rem",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--base-color)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
} satisfies Config;
