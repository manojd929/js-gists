// a holds the address
let a = { num: 1 };

let change1 = (val) => {
  // changes the address, creates new var val inside
  val = {}; // reassign
};
let change2 = (val) => {
  val.num = 2; // mutate
};

change1(a);
console.log(a); // prints same

change2(a);
console.log(a);
