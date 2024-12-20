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
        primary: {
          light: '#5DA3FA', 
          DEFAULT: '#3B82F6', 
          dark: '#2563EB', 
        },
        secondary: {
          light: '#FFEEDB', 
          DEFAULT: '#FFCC99', 
          dark: '#E6A671', 
        },
        neutral: {
          light: '#F7F7F7', 
          DEFAULT: '#E5E5E5', 
          dark: '#A3A3A3', 
        },
        text: {
          primary: '#1F2937', 
          secondary: '#4B5563',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
