const path = require("path"),
  glob = require('glob-all'),
  webpack = require("webpack"),
  PurifyCSSPlugin = require('purifycss-webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./source/js/script.js",
  output: {
    filename: "js/bundle.js",
    path: path.join(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loaders: [
          'file-loader?name=images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                quality: '65',
                progressive: true
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "source/html/index.html"
    }),
    new ExtractTextPlugin("style.css"),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, './source/js/script.js'),
        path.join(__dirname, './source/html/index.html')
      ])
    })
  ]
}