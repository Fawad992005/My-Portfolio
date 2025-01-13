const { default: daisyui } = require("daisyui");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // Add DaisyUI plugin here
  ],
  daisyui: {
    themes: ["dark", "light"],
  },
};
