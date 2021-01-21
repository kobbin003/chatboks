const path = require("path");
module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        /* to test every file with .js extension */
        exclude: /node_modules/,
        /* excludes the files inside the node_modules folder */
        use: {
          loader: "babel-loader",
          /* this converts es6 to old javascript for browsers */
          options: {
            presets: ["@babel/preset-env"],
            /* babel-loader uses this preset for common web environment. 
        There are different presets for different environment like react etc.. */
          },
        },
      },
      {
        test: /\.css$/,
        /* to test every file with .css extension */
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    /** webpack-dev-server will be serving this folder */
    watchContentBase: true,
    /** watches for any change in your dist folder and refreshes the browser */
    publicPath: "/",
  },
};

//   entry: ["./src/index.js", "./src/showtools.js"],
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "main.js",
//   },
