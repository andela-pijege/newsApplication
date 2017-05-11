const path = require('path');
require('dotenv').config();
const webpack = require('webpack');

const envsDefinePlugin = new webpack.DefinePlugin({
  'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
});

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    envsDefinePlugin,
  ],
};
