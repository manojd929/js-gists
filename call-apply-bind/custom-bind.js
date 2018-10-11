Function.prototype.customBind = function(obj) {
  let fn = this;
  if (typeof fn !== 'function') {
    return "You are not binding a function";
  }

  let firstArgs = Array.prototype.slice.call(arguments, 1);

  return function() {
    let secondArgs = Array.prototype.slice.call(arguments);
    let args = [...firstArgs, ...secondArgs];
    fn.apply(obj, args);
  }
}

function demo(a, b, c) {
  console.log(this.name, a + b + c);
}

let obj = { name: 'Ram' };

let checkCustomBind = demo.customBind(obj);
checkCustomBind(1, 2, 3);
let checkBind = demo.bind(obj);
checkBind(1, 2, 3);