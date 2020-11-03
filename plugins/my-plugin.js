const text = 'balabala';

class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      compilation.assets['text.txt'] = {
        source: () => text,
        size: () => text.length
      }
    });
  }
}

module.exports = MyPlugin;
