// we are going to use closures to build currying

var add = function(a) {
  return function(b) {
    return a + b;
  }
}

console.log(add(10)(5));