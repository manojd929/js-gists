"use strict"

var avg = function(...n) {
  let total = 0;

  for(let i = 0; i < n.length; i += 1) {
    total += n[i];
  }
  return total/n.length;
};

var spiceUp = function(fn, ...n) {
  return function(...m) {
    return fn.apply(this, n.concat(m));
  }
};

var doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg(4, 5, 6));
