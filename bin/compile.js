const webpack = require('webpack');
const config = require('../webpack.config');

webpack(config.default).run((err, stats) => {
  if(err) {
    console.log('err');
  };
  console.log('Congratulations!')
});
