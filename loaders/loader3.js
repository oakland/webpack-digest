module.exports = function simpleLoader(content) {
  console.log('loader3: ', this.resourcePath);
  console.time();
  return content.replace(/world3/i, 'loader3');
}
