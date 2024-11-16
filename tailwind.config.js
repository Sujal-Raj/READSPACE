/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-stroke-white': {
          color: 'transparent',
          '-webkit-text-stroke': '1px #ffffff',
        },
        '.text-stroke-emrald': {
          color: 'transparent',
          '-webkit-text-stroke': '1px rgba(52, 221, 153)',
        },
      });
    },
  ],
}

