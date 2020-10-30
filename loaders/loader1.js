module.exports = function simpleLoader(content) {
  return content.replace(/world1/i, 'loader1');
}
