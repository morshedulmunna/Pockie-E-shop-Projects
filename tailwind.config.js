module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#68D237",
          secondary: "#FF8154",
          accent: "#FFE923",
          neutral: "#000000",
          white: "#ffffff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
