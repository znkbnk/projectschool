const path = require('path');

module.exports = {
  entry: './netlify/functions/create-user.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/functions'),
    filename: 'create-user.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    '@babel/standalone': 'Babel', // This will prevent Babel from being bundled
  },
  devtool: 'source-map',  // For debugging
};