/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      primary: '#6C6CFF',
      secondary:'#434348',
      "primary-dark": '#252526',
      white: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
}
