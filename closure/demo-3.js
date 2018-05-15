var outer = function(passed) {
  var inner = function(inVar) {
    return passed + inVar;
  };
  return inner;
};

// this preseve the variable as property in the function
var outerObj1 = new outer(1);
var outerObj2 = new outer(2);

console.dir(outerObj1);
console.dir(outerObj2);

console.log(outerObj1(5));
console.log(outerObj2(5));
