/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#0066FF',
        'deep-navy': '#0A1E3D',
        'electric-blue': '#0066FF',
        'soft-gray': '#F5F7FA',
        'medium-gray': '#8B95A5',
        'pix-green': '#00D632',
        'soft-black': '#1A1A1A',
        'gold-accent': '#D4AF37',
        'urgent-red': '#FF3B30',
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'apple': '12px',
      },
    },
  },
  plugins: [],
}
