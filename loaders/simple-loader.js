const path = require('path');
const loaderUtils = require("loader-utils");

module.exports = function simpleLoader(content) {
  const outputPath = loaderUtils.interpolateName(this, 'test.txt', {});
  this.emitFile(outputPath, 'test');

  return content.replace(/world/i, 'simple-loader');
}
