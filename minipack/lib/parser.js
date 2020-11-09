const fs = require('fs');
const parse = require('@babel/parser').parse;
const traverse = require('@babel/traverse').default;
const transformSync = require('@babel/core').transformSync;

module.exports = {
  getAST: filename => {
    const source = fs.readFileSync(filename, 'utf-8');
    const ast = parse(source, {
      sourceType: 'module'
    });
    return ast;
  },
  getDependencies: ast => {
    const dependencies = [];
    traverse(ast, {
      ImportDeclaration: ({node}) => {
        dependencies.push(node.source.value)
      }
    });
    return dependencies;
  },
  transform: source => {
    const {code} = transformSync(source, {
      sourceType: 'module',
      presets: ['@babel/preset-env']
    });
    return code;
  }
}
