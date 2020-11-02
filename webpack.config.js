const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./plugins/my-plugin');

exports.default = {
  mode: 'development', // 为了方便查看打包后的内容，我们采用 development mode
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MyPlugin()
  ]
}
