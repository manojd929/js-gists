let Car = function(color) {
  this.color = color;
};

Car.prototype.getColor = function() {
  return this.color;
};

// overriding toString of master Object
Object.prototype.toString = function() {
  return `color: ${this.color}`;
};

let redCar = new Car('red');
console.log(redCar);
console.log(redCar.getColor());

console.log(redCar.toString());