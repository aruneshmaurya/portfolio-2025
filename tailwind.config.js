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
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        'accent': 'var(--accent)',
        'accent-purple': 'var(--accent-purple)',
        'accent-glow': 'var(--accent-glow)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border': 'var(--border)',
        'border-accent': 'var(--border-accent)',
        'green-wa': 'var(--green-wa)',
        
        // Backward compatibility mappings
        'bg-main': 'var(--bg-primary)',
        'indigo-accent': 'var(--accent)',
        'purple-accent': 'var(--accent-purple)',
        'text-main': 'var(--text-primary)',
        'text-muted': 'var(--text-secondary)',
      }
    },
  },
  plugins: [],
}
