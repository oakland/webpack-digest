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
          path.join(__dirname, '/loaders/loader1'),
          path.join(__dirname, '/loaders/loader2'),
          path.join(__dirname, '/loaders/loader3')
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1500, // 改成 2000 后会被编码成 base64
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
