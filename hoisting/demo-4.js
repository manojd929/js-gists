/* 
  Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false,
  });

  PI = 2; // does not give error
  console.log(PI);
*/

// let gives you block scope
// let does not give hoisting

const PI = 3.14;
// PI = 4; throws error
console.log(PI);

let x = function() {
  // console.log(y); throws error
  y = 2;
}
x();




