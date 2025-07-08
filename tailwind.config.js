module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          mono: ['"Roboto Mono"', "monospace"],
          sans: ['"Roboto Mono"', "sans-serif"],
        },
      },
      margin: {
        screen: "100vh",
      },
      padding: {
        screen: "100vh",
      },
    },
  },
  plugins: [],
};
