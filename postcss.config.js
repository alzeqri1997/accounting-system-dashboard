
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-rtl": {
      fromRTL: true,
      blacklist: ['background', 'background-color']
    }
  },
}
