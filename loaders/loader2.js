function loader2(content) {};

loader2.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('remainingRequest: ', remainingRequest);
  console.log('precedingRequest: ', precedingRequest);
  console.log('data: ', data);
  console.log( 'module.exports = require(' + JSON.stringify('!!' + remainingRequest) + ');');

  return 'module.exports = require(' + JSON.stringify('!!' + remainingRequest) + ');';
};

module.exports = loader2;
