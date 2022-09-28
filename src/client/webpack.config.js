const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader'
      },
      {
        test: /\.html$/i,
        include: path.resolve(__dirname, 'src'),
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: '../../public',
    path: path.resolve(__dirname, '../../public'),
    filename: 'client-bundle.js'
  },
  optimization: {
    minimize: false
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../../public')
    },
    proxy: {
      open: true,
      '/': 'http://localhost:1337'
    }
  }
};
