/* config-overrides.js */
const TreatPlugin = require("treat/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require("path");

module.exports = function override(config, env) {
  const newConfig = { ...config };

  // Add treat plugin for treat styles
  newConfig.plugins = [
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
    }),
    new MiniCssExtractPlugin({ filename: "widgets.css" }),
  ].concat(newConfig.plugins);

  return newConfig;
};
