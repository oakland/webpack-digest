const {AsyncSeriesWaterfallHook} = require('tapable');

let queue = new AsyncSeriesWaterfallHook(['name']);

console.time('cost');
queue.tapAsync('1', function (name, callback) {
  setTimeout(function () {
    console.timeLog('cost');
    console.log(name, 1);
    callback(null, 'Tom');
  }, 1000)
});
queue.tapAsync('2', function (data, callback) {
  setTimeout(function () {
    console.timeLog('cost');
    console.log(data, 2);
    callback(null, 'Lily');
  }, 2000)
});
queue.tapAsync('3', function (data, callback) {
  setTimeout(function () {
    console.timeLog('cost');
    console.log(data, 3);
    callback(null, 'Jeff');
  }, 3000)
});

queue.callAsync('webpack', (err, data) => {
  if(err) {
    console.log(err);
  };
  console.log('over', data);
  console.timeEnd('cost');
});
