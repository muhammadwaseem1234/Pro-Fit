/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}", // scan all .ts and .tsx files in src/
  ],
  theme: {
    extend: {
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};
