const Compiler = require('./Compiler');
const options = require('../minipack.config.js');

new Compiler(options).run();
