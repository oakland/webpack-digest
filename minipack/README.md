``` javascript
// Compiler
class Compiler {
  constructor(options) {...} 
  run() {...}
  buildModule() {...}
  emitFiles() {...}
}

// Parser.js
module.exports = {
  getAST: filename => {...},
  getDependencies: ast => {...},
  transform: source => {... }
}
```
