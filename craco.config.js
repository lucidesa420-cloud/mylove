module.exports = {
  webpack: {
    alias: {
      "@": require("path").resolve(__dirname, "src/"),
    },
  },
  babel: {
    presets: [["@babel/preset-react", { runtime: "automatic" }]],
  },
};
