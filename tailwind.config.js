/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
        'twitter-black': '#14171a',
        'twitter-dark-gray': '#657786',
        'twitter-ligh-gray': '#aab8c2',
        'twitter-extra-ligh-gray': '#e1e8ed',
        'twitter-background': '#15202b',
      }
    },
  },
  plugins: [],
}
