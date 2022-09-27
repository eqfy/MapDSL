const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: 'public',
    path: path.resolve(__dirname, 'public'),
    filename: 'client-bundle.js'
  },
  optimization: {
    minimize: false
  }
};
