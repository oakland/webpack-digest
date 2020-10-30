const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
  mode: 'development', // 为了方便查看打包后的内容，我们采用 development mode
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.join(__dirname, '/loaders/simple-loader')
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
