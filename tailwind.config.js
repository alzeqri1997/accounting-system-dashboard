/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    colors: {
      primary: "#6C6CFF",
      secondary: "#434348",
      "primary-dark": "#252526",
      white: "#FFFFFF",
      gray: "#888888",
    },
    extend: {},
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      themes: true,
      base: false,
      utils: true,
      logs: true,
      rtl: true,
      darkTheme: "dark",
      themes: [
        {
          mytheme: {
            primary: "#6c6cff",
            secondary: "#434348",
            accent: "#252526",
            neutral: "#191D24",
            "base-100": "#2A303C",
            info: "#3ABFF8",
            success: "#27AE60",
            warning: "#FBBD23",
            error: "#EB5757",
          },
        },
      ],
    },
  },
};
