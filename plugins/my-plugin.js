// https://webpack.js.org/concepts/plugins/#root
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log(' --- The webpack build process is starting!!! --- ');
    });
    // compiler.hooks.emit.tapAsync(pluginName, compilation => {
    //   console.log(' --- The webpack build process is over!!! --- ');
    // });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
