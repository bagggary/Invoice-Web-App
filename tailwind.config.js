/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      content: {
        link: "url(./src/assets/icon-check.svg)",
      },
      colors: {
        primary: "#7c5dfa",
        secondry: "#9277ff",
        red: "#EC5757",
        "red-light": "#FF9797",
        "gray-light": "#DFE3FA",
        "dark-gray": "#888EB0",
        "blue-dark": "#1E2139",
        "blue-light": "#252945",
        "light-BG": "#F8f8fb",
        black: "#141625",
        "black-1": "#0C0E16",
        torko: "#7E88C3",
        pending: "#FF8F00",
        paid: "#33D69F",
        draft: "#373B53",
      },
    },
  },
  plugins: [],
};
