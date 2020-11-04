const {SyncLoopHook} = require("tapable");

let queue = new SyncLoopHook(['name']);

let count = 3;
queue.tap('1', function (name) {
  console.log(name, count--);
  if (count > 0) {
    return true;
  }
  return; // Loop will be stopped until this return.
});

queue.call('webpack');
