const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      console.log('compilation: ', Object.keys(compilation))
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
