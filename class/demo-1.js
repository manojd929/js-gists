/*
  Classes in JS are nothing but
  Function constructors with prototype methods
*/

class Car {
  constructor(color) {
    this.color = color;
  }

  drive() {
    console.log('Driving');
  }
}
console.dir(Car);
console.log(typeof(Car));
// above is same as this IIFE

let Bike = (function() {
  let _bike = function(color) {
    this.color = color;
  };

  _bike.prototype.drive = function() {
    console.log('Driving');
  };

  return _bike;
})();
console.dir(Bike);

const redCar = new Car('RED');
console.dir(redCar);