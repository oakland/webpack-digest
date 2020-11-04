const {SyncHook} = require('tapable');

const queue = new SyncHook(['name']);

// tap|subscribe|register|on
queue.tap('1', name => {
  console.log(name, 1)
})
queue.tap('2', name => {
  console.log(name, 2)
})
queue.tap('3', name => {
  console.log(name, 3)
})

// call|publish|execute|trigger
queue.call('webpack');
