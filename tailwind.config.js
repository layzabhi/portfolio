/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#ff6b00',
        'soft-orange': '#ff8c42',
        'deep-black': '#050505',
        'matte-black': '#0f0f0f',
        'dark-gray': '#171717',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo2': ['"Exo 2"', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
