'use strict';
let Car = function(color) {
  if (!new.target) throw 'Car() must be called with the new';

  this.color = color;
};
// without new, this would return undefined because function does not return anything
let redCar = new Car('red');
let blueCar = new Car('blue');

console.log(blueCar.color);

let carO = Car('orange');
/*
__proto__ : parent or creator
*/
