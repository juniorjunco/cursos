/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#ffffff",
        primary: "#ff7f50",
        secondary: "#1a1a1a",
        gray: "#4a4a4a",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Fuente elegida (puedes cambiarla a otra)
        serif: ['"Lora"', 'serif'], // Para fuentes más elegantes y sofisticadas
      },
    },
  },
  plugins: [],
};
