const path = require('path');

module.exports = function simpleLoader(content) {
  const headerPath = path.resolve('../src/headerTxt.js');
  this.addDependency(headerPath);
  if(this.resourcePath.endsWith('headerTxt.js')) {
    this.emitWarning(new Error('WARNING: headerTxt!!!!!'));
  }

  return content.replace(/world/i, 'simple-loader');
}
