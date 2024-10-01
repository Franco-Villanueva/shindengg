/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Verifica que este patrón coincida con tus archivos de código.
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],

      },
      maskImage: {
        'gradient-to-bottom': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
      },
    }
  },
  plugins: [],
};