const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      main: "#FEFCE8",
      nav: "#000000",
      blue:"#2563EB",
      white:{
        100:'#71717A',
        400:'#EFEFEF',
        600:'#FFFFFF'
      },
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
