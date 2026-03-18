/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#050505',
          'black-secondary': '#0A0A0C',
          'black-gradient': '#060811',
          gold: '#C9A36A',
          'gold-light': '#F2D7A6',
          platinum: '#D6D6D6',
          ruby: '#9B111E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #C9A36A 0%, #F2D7A6 100%)',
        'dark-radial': 'radial-gradient(circle at center, #060811 0%, #050505 100%)',
      },
    },
  },
  plugins: [],
}
