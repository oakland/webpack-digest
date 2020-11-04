const {AsyncSeriesBailHook} = require('tapable');

let queue = new AsyncSeriesBailHook(['name']);

console.time('cost');
queue.tapAsync('1', function (name, callback) {
  setTimeout(function () {
    console.timeLog('cost');
    console.log(name, 1);
    callback();
  }, 1000)
});
queue.tapAsync('2', function (name, callback) {
  setTimeout(function () {
    console.timeLog('cost');
    console.log(name, 2);
    callback('wrong');
  }, 2000)
});
queue.tapAsync('3', function (name, callback) {
  setTimeout(function () {
    console.timeLog('cost');
    console.log(name, 3);
    callback();
  }, 3000)
});
queue.callAsync('webpack', err => {
  if(err) {
    console.log(err);
  };

  console.log('over');
  console.timeEnd('cost');
});
