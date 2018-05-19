// var has function scope
// does not respect block scope

var x = function() {

  if (true) {
    var y = 2;
  }

  console.log(y); // still gives 2
}

x();