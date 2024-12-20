import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-light': '#f7f9fa', 
        'neutral-dark': '#232f3e', 
        'text-primary': '#111827', 
        'text-secondary': '#d1d5db', 
        'button-primary': '#ff9900', 
        'button-secondary': '#f08804', 
        'price-red': '#b12704', 
      },
    },
  },
  plugins: [],
} satisfies Config;
