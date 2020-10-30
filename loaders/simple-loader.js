module.exports = function simpleLoader(content) {
  return content.replace(/world/i, 'simple-loader');
}
