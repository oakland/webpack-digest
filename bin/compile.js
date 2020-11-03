const webpack = require('webpack');
const config = require('../webpack.config');

const compiler = webpack(config.default); // 创建一个 compiler
compiler.run((err, stats) => {
  if(err) {
    console.log('err');
  };
  console.log('Congratulations!')
});
