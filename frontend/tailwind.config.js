/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '10% 85% 5%',
        todo: "10% 80% 10%"
      },
    },
  },
  plugins: [],
}

