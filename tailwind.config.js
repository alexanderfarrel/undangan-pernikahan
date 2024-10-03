/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "400px" },
    },
    extend: {
      boxShadow: {
        custom: "0 0px 10px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
