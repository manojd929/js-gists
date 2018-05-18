let a = 1;

let change = (val) => {
  val = 2;
};

change(a);
console.log(a); // 1 value is preseved

// In JS it is always passed by reference
