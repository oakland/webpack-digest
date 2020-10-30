const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
  mode: 'development',
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
          // path.resolve(__dirname, './loaders/simple-loader') // 这种写法也可以
        ]
      }
    ]
  },
  // 也可以通过下面的方式引入本地 loader
  // resolveLoader: {
  //   modules: [path.resolve(__dirname, 'loaders'), 'node_modules']
  // }
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
