/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-500": "#2A2356",
        "space-900": "#0A0815",
        "galaxy-800": "rgba(17, 25, 40, 0.8)",
        "stellar-400": "#6366f1",
        "stellar-600": "#4338ca",
        "neon-400": "#00f7ff",
        "neon-300": "#6ee7b7",
      },
      boxShadow: {
        "custom-xl": "0 20px 50px -10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
