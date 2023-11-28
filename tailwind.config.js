/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: {
        soft: "#424146",
        plain: "#212121"
      },
      gray: "#D4D9DD",
      beige: "#BAB6B5",
      white: {
        soft: "#F1F1F1"
      },
      green: {
        olive: "95AE83",
        pastel: "#B4D5C5"
      },
      blue: {
        glacier: "#C6E3DF"
      },
      yellow: {
        dirty: "#D5BD63"
      },
      orange: {
        dirty: "#CA6419"
      },
      turqoise: {
        light: "#76BCB2",
        dark: "#3A7F85"
      }
    },
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