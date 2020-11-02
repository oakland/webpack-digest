// https://webpack.js.org/contribute/plugin-patterns/#root
class MyPlugin {
  constructor() {
    this.startTime = Date.now();
    this.prevTimestamps = new Map();
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
      const changedFiles = Array.from(compilation.fileTimestamps.keys()).filter(
        watchfile => {
          return (
            (this.prevTimestamps.get(watchfile) || this.startTime) <
            (compilation.fileTimestamps.get(watchfile) || Infinity)
          );
        }
      );
      console.log('changedFiles: ', changedFiles);

      this.prevTimestamps = compilation.fileTimestamps;
      callback();
    });
  }
}

module.exports = MyPlugin;
