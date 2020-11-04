const {SyncBailHook} = require('tapable');

const queue = new SyncBailHook(['name']);

queue.tap('1', name => {
  console.log(name, 1);
});
queue.tap('2', name => {
  console.log(name, 2);
  return 'Anything except undefined';
  // return undefined;
});
queue.tap('3', name => {
  console.log(name, 3); // this will not be executed
});

queue.call('webpack');
