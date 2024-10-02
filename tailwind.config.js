/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure you scan your JSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6AABD2',
        secondary: '#D1E7E3',
        accent: '#2F8479',
      },
    },
  },
  plugins: [],
};


