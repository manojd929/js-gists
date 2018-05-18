let a = { num: 1 };
let b = a;
a = {};
console.log(a);
console.log(b);

let c = { num: 1 };
let d = c;
c.num = 2;
console.log(c);
console.log(d);