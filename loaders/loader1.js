module.exports = function simpleLoader(content) {
  console.log('loader1: ', this.resourcePath);
  return content.replace(/world1/i, 'loader1');
}
