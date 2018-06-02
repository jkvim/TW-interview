exports.each = function (testInputs) {
  var callback;

  return {
    then: function (callback) {
      testInputs.forEach(function (testInput) {
        callback(testInput[0], testInput[1]);
      });
    }
  }
}