module.exports = function simpleLoader(content) {
  // return content.replace(/world2/i, 'loader2');
  const callback = this.async();
  setTimeout(() => {
    console.log('loader2: ', this.resourcePath);
    console.timeEnd();
    callback(null, content.replace(/world2/i, 'loader2'));
  }, 2000);
}
