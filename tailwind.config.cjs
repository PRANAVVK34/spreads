const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      main: "#FEFCE8",
      nav: "#000000",
      white:{
        100:'#71717A',
        400:'#EFEFEF',
      },
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;