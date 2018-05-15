var pass = 5;

var outer = function() {
  var inner = function(inVar) {
    return pass + inVar;
  };
  return inner;
};

console.log(outer()(5));
pass = 10;
console.log(outer()(5));

console.dir(outer);
