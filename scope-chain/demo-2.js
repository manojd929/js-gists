// Shadowing and Overriding

var global1 = "global1";

function a() {
  global1 = "override global1";

  console.log("inside a", global1);
}
a();
console.log(global1);

var global2 = "global2";

function b() {
  // shadow global2 declared in upper scope
  var global2 = "redefining global2";

  console.log("inside b", global2);
}
b();
console.log(global2);
