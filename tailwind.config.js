/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'graph-bg': 'rgba(255, 0, 245, 0.05)',
        'main-blue': '#000AFF',
      },
      fontFamily: {
        manrope: ['var(--font-manrope) sans-serif'],
      },
    },
  },
  plugins: [],
};
