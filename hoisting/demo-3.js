var y = 2;

var  x = function() {
  var y = 3;

  var z = function() {
    console.log(y); // 3 still accessible
  }

  z();
}

x();