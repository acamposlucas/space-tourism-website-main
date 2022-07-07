const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        destination: resolve(__dirname, "destination.html"),
        crew: resolve(__dirname, "crew.html"),
        technology: resolve(__dirname, "technology.html"),
      },
    },
  },
});
