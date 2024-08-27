/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Verifica que este patrón coincida con tus archivos de código.
  theme: {
    extend: {
      screens: {
        'mobile': '480px',    // Dispositivos móviles
        'tablet': '768px',    // Tabletas
        'desktop': '1024px',  // Escritorios
        'pc': '1280px',       // PCs grandes
      },
      fontSize: {
        's': '0.75rem',  // Tamaño de fuente pequeño (por defecto para móviles)
        'm': '0.90rem',     // Tamaño de fuente mediano (tablets)
        'l': '1.05rem',  // Tamaño de fuente grande (desktops)
        'xl': '1.2rem',  // Tamaño de fuente extra grande (pantallas grandes)
      },
    },
  },
  plugins: [],
};