const path = require('path');

module.exports = function simpleLoader(content) {
  const headerPath = path.resolve('./src/headerTxt2.js');
  this.addDependency(headerPath);

  return content.replace(/world/i, 'simple-loader');
}
