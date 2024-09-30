/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Verifica que este patrón coincida con tus archivos de código.
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Configura 'Poppins' como la fuente predeterminada
      },
    }
  },
  plugins: [],
};