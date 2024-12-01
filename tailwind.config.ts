import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'primary-alt': "var(--primary-alt)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        stroke: "var(--stroke)",
        stroke2: "var(--stroke2)",
        accent: "var(--accent)",
        'black-lite': "var(--black-lite)",
        'footer-links': "var(--footer-link)",
      },
      fontFamily: {
        'circular-std-book': ['var(--font-CircularStd-Book)'], 
        'circular-std-medium': ['var(--font-CircularStd-Medium)'], 
        'circular-std-bold': ['var(--font-CircularStd-Bold)'], 
        recoleta: ['var(--font-recoleta-regular)'], 
        'recoleta-alt-bold': ['var(--font-recoleta-alt-bold)'], 
      },
    },
  },
  plugins: [],
} satisfies Config;
