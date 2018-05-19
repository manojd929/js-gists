var obj1 = { bar: 'bar-1', foo: 'foo-1', num: 3 };
var obj2 = { bar: 'bar-2', foo: 'foo-2', num: 4 };

// this value depends on whi called it not on where it was declared
var demo = function(arg1, arg2, arg3) {
  console.log(this);
  return this.num + arg1 + arg2 + arg3;
}

console.log("call: ", demo.call(obj1, 11, 12, 13));

// Not an array exactly, its an array like object.
// Its proto does not have array functionalities
// we can however borrow functionalities of array explicitly
// eg: [].slice.call(args);
console.log("apply: ", demo.apply(obj2, [21, 22, 23]));

// bind creates copy of the function
// bind internally implements apply
// bind does not return a value it returns an object (function)
var copyDemo = demo.bind(obj1);
console.log("bind: ", copyDemo(31, 32, 33), '\n');
console.dir(demo.bind(obj2));
