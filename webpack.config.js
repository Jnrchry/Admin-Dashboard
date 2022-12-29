const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|jpg|jpeg|svg|woff|woff2|ttf)$/,
      //   loader: "url-loader",
      // },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpg|png|jpeg)$/i,
        exclude: /(node_modules)/,
        loader: "file-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
