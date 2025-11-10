/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: '#D4916C',
        rose: '#F5E6E0',
        sky: '#E8F4F8',
        'text-dark': '#333333',
        'text-muted': '#666666',
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px rgba(212, 145, 108, 0.15)',
        soft: '0 8px 20px rgba(51, 51, 51, 0.08)',
      },
      transitionTimingFunction: {
        'in-out-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

