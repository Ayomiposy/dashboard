/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        "card-image": "url('/assets/Icons/cardbgImage.svg')",
      },

      colors: {
        "sub-600": "#525866",
        "strong-950": "#0E121B",
        "soft-400": "#99A0AE",
        "soft-200": "#E1E4EA",
        "weak-50": "#F5F7fa",
        "primary-base": "#335CFF",
        "static-white": "#ffffff",
        "card-black": "#0E121B",
      },
    },
  },
  plugins: [],
};
