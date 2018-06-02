exports.each = function (testInputs) {
  var callback;

  return {
    then: function (callback, message) {
      testInputs.forEach(function (testInput) {
        callback(testInput[0], testInput[1]);
      });
      console.log(`PASS ${message}`);
    }
  }
}