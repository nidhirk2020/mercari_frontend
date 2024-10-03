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
        accent: '#164453',
      },
    },
    screens: {
      'xs': '360px',    // Extra small devices (mobile)
      'sm': '640px',    // Small devices (mobile)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (laptops)
      'xl': '1280px',   // Extra large devices (desktops)
      '2xl': '1536px',  // 2x large screens (big desktops)
      '3xl': '1920px',  // 3x large screens (very large desktops)
      '4xl': '2560px',  // 4x large screens (wide screens)
    },
  },
  plugins: [],
};
