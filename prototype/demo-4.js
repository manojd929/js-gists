// Every object in JS is created from Master Object
// console.dir(Object);

/* 
Object.create(proptotypeObject, propertyObject);
second arg is optional

Helps to extend constructor , not class's methods and all
*/

const myObject = Object.create(Object.prototype);
const myLiteral = {};
const noProto = Object.create(null);
console.dir('muObject: ', myObject);
console.dir('myLiteral: ', myLiteral);
console.dir('noProto: ', noProto);


const Car = function(color) {
  this.color = color;
};
Car.proptotype.getColor = function() {
  return this.color;
};

const c1 = new Car('Red');
const c2 = Object.create(Car.prototype);

console.log('c1: ', c1);
console.log('c2: ', c2);
