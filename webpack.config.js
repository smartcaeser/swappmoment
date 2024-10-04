const path = require("path");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const MomentTimezoneDataPlugin = require("moment-timezone-data-webpack-plugin");
const currentYear = new Date().getFullYear();

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "swappmoment.js",
    path: path.resolve(__dirname, "dist"),
    library: "swappmoment",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ["ar"],
    }),
    new MomentTimezoneDataPlugin({
      matchZones: ["Africa/Cairo"],
      startYear: currentYear - 2,
      endYear: currentYear + 10,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    moment: "moment",
  },
};
