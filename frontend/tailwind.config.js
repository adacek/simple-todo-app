/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '10% 85% 5%',
        todo: "15% 70% 15%"
      },
    },
  },
  plugins: [],
}

