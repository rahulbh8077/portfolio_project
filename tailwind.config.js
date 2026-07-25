/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#000000',
        lightBg: '#F8FAFC',
        accentBlue: '#3B82F6',
        accentCyan: '#06B6D4',
        accentPurple: '#8B5CF6',
        cardDark: 'rgba(21, 28, 51, 0.65)',
        cardLight: 'rgba(255, 255, 255, 0.75)',
        borderDark: 'rgba(255, 255, 255, 0.08)',
        borderLight: 'rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
}
