const fs = require('fs');
const path = require('path');
const parse = require('@babel/parser').parse;
const traverse = require('@babel/traverse').default;
const transformSync = require('@babel/core').transformSync;

const source = fs.readFileSync('./src/index.js', 'utf-8');
const ast = parse(source, {
  sourceType: 'module'
});

let deps = [];

traverse(ast, {
  ImportDeclaration: ({node}) => {
    deps.push(node.source.value)
  }
});

const transformedCode = transformSync(source, {
  sourceType: 'module', // need to append some options like 'use strict' etc
  presets: ['@babel/preset-env']
});

const { code, map, ast: newAst } = transformedCode;
console.log(code);
