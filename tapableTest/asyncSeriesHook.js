const {
  AsyncSeriesHook
} = require('tapable');
let queue = new AsyncSeriesHook(['name']);

console.time('cost');
queue.tapAsync('1', function (name, cb) {
  setTimeout(() => {
    console.timeLog('cost');
    console.log(name, 1);
    cb();
  }, 1000);
});
queue.tapAsync('2', function (name, cb) {
  setTimeout(() => {
    console.timeLog('cost');
    console.log(name, 2);
    cb();
  }, 2000);
});
queue.tapAsync('3', function (name, cb) {
  setTimeout(() => {
    console.timeLog('cost');
    console.log(name, 3);
    cb();
  }, 3000);
});

queue.callAsync('webpack', (err) => {
    if(err) {
      console.error('err: ', err);
    };
    console.log('over');
    console.timeEnd('cost');
});
