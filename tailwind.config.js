/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      "lilita": ["Lilita", "sans-serif"],
      "dm-sans": ["DM Sans", "sans-serif"]
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      }
    }
  },
  plugins: []
};