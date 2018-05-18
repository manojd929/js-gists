var sayWhat = function(a) {
  return function(b) {
    return function(c) {
      console.log("Saying ", a, "to ", b, "using ", c);
    }
  }
};

sayWhat('Hello')('Friends')('using JS');
