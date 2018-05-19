// Lexical scoping : Nested functions have access to
// variables declared in outer scope

var global = "global";

function a() {
  var aa = "aa";
  var bb = function() {
    var bb = "bb";
    console.log(global, aa, bb);
  };

  bb();
}

a();
