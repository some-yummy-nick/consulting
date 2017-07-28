const path = require("path"),
  glob = require('glob-all'),
  webpack = require("webpack"),
  PurifyCSSPlugin = require('purifycss-webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  merge = require('webpack-merge'),
  devserver = require('./webpack/devserver'),
  favicon = require('./webpack/favicon');

let env = process.env.NODE_ENV || 'development';

const common = {
  entry: {
    jquery:["jquery"],
    script: "./source/js/script.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js"
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
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
      template: "source/html/index.html",
      minify: {
        collapseWhitespace: env === 'production'
      },
      chunksSortMode: function (chunk1, chunk2) {
        var orders = ['jquery', 'script'];
        var order1 = orders.indexOf(chunk1.names[0]);
        var order2 = orders.indexOf(chunk2.names[0]);
        return order1 - order2;
      },
      hash: env === 'development'
    }),
    new UglifyJsPlugin({
        compress:env === 'production'
      }
    ),
    new ExtractTextPlugin("style.css"),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, './source/js/*.js'),
        path.join(__dirname, './source/html/index.html')
      ]),
      minimize:env === 'production'
    }),
    new CopyWebpackPlugin([
      {from: "source/fonts/", to: "fonts"},
      {from: "source/libraries/", to: "libraries"}
    ])
  ]
}

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      favicon()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver()
    ]);
  }
};
