const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = function() {
  return{
    plugins: [
      new FaviconsWebpackPlugin({
        logo: "./source/images/logo.png",
        // The prefix for all image files (might be a folder or a name)
        prefix: "favicon/",
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: "manifest.json",
        // Generate a cache file with control hashes and
        // don"t rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: "#000",
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: "Webpack App",

        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })
      ]
  }
};
