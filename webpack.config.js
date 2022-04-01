const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        // always style-loader come first 
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

