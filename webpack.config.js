const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
  public: path.resolve(__dirname, "public"),
};

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(paths.src, "index.tsx"),
  },
  output: {
    path: paths.dist,
    clean: true,
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: paths.dist,
      watch: true,
    },
    port: 3000,
    compress: true,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: "/node_modules",
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.public, "index.html"),
    }),
  ],
};
