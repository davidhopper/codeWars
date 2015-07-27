function once (fn) {
  var called = false;

  return function() {
    if (!called) {
      var args = Array.prototype.slice.call(arguments);
      debugger;
      called = true;
      return fn.apply(this, args);
    } else {
      return undefined;
    }
  };
};