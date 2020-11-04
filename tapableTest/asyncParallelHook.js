const {AsyncParallelHook} = require('tapable');

let queue2 = new AsyncParallelHook(['name']);
console.time('cost');
queue2.tapAsync('1', function (name, cb) {
  setTimeout(() => {
    console.timeLog('cost');
    console.log(name, 1);
    cb();
  }, 1000);
});
queue2.tapAsync('2', function (name, cb) {
  setTimeout(() => {
    console.timeLog('cost');
    console.log(name, 2);
    cb();
  }, 2000);
});
queue2.tapAsync('3', function (name, cb) {
  setTimeout(() => {
    console.timeLog('cost');
    console.log(name, 3);
    cb();
  }, 3000);
});

queue2.callAsync('webpack', () => {
    console.log('over');
    console.timeEnd('cost');
});
