//Closures are functions with preserved data

var pass = 5;

var outer = function() {
  var inner = 0;
  return pass + inner;
};

console.log(outer());
pass = 10;
console.log(outer());

console.dir(outer); // check in browser console,  function scope
