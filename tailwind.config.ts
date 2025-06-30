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
        mountain: {
          1: '#d0dff0', // First - cima nevada
          2: '#b0c4de', // Second - montaña lejana
          3: '#8ca1af', // Third - montaña media
          4: '#6c7a89', // Fourth - intermedia rocosa
          5: '#4d6f52', // Fifth - vegetación de altura
          6: '#2f4f4f', // Sixth - base boscosa
        },
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Custom text shadow
        md: '3px 3px 5px rgba(0, 0, 0, 0.5)', // Optional different shadow strength
        lg: '4px 4px 6px rgba(0, 0, 0, 0.5)', // Larger shadow
      },
    },
  },
  plugins: [
    // Tailwind plugin for text shadow
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;