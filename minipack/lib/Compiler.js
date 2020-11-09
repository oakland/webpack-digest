const fs = require('fs');
const path = require('path');
const { getAST, getDependencies, transform } = require('./parser');

class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }

  run() {
    const entryModule = this.buildModule(this.entry, true);
    this.modules.push(entryModule);
    this.modules.forEach(_module => {
      _module.dependencies.forEach(dependency => {
        this.modules.push(this.buildModule(dependency, false));
      });
    });
    this.emitFiles();
  }

  buildModule(filename, isEntry) {
    const finalFilename = isEntry ? filename : path.resolve(__dirname, `../src/${filename}`);
    const source = fs.readFileSync(finalFilename, 'utf-8');
    const ast = getAST(finalFilename);

    return {
      filename,
      dependencies: getDependencies(ast),
      transformCode: transform(source)
    }
  }

  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename);
    let modules = '';

    this.modules.forEach(_module => {
      modules += `'${_module.filename}': function(require, module, exports) {${_module.transformCode}},`
    });

    const bundle = `
      (function(modules) {
        function require(filename) {
          const fn = modules[filename];
          const module = {exports: {}};
          fn(require, module, module.exports);
          return module.exports;
        }
        require('${this.entry}');
      })({${modules}})
    `

    if(!fs.existsSync(this.output.path)) {
      fs.mkdirSync(this.output.path)
    };

    fs.writeFileSync(outputPath, bundle, 'utf-8')
  }
}
module.exports = Compiler;
