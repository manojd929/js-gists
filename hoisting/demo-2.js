var y = 2;

var x = function() {
  console.log(y); // undefined
  var y = 4;
}

x();