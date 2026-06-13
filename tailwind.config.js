/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'bg-main': '#070B14',
        'bg-card': '#0D1526',
        'indigo-accent': '#5B6EF5',
        'purple-accent': '#8B5CF6',
        'text-main': '#F0F4FF',
        'text-muted': '#8892A4',
      }
    },
  },
  plugins: [],
}
