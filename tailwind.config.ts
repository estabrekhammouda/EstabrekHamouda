import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config