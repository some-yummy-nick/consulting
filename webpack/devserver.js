const path = require("path");
module.exports = function() {
  return {
    devServer: {
      contentBase: path.join(__dirname, "../build"),
      compress: true,
      host: "192.168.0.112",
      port: 3000,
      stats: "errors-only"
    }
  }
};