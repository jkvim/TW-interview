exports.each = function (testInputs) {
  var callback;

  return {
    then: function (message, callback) {
      testInputs.forEach(function (testInput) {
        callback(testInput[0], testInput[1]);
      });
      console.log(`PASS ${message}`);
    }
  }
}