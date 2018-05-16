const Car = function(color) {
  this.color = color;
};

Car.prototype = {
  getColor() {
    return this.color;
  }
};

const ToyCar = function() {
};
ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();

console.log(legoCar instanceof ToyCar);
console.log(legoCar instanceof Car);
console.log(legoCar instanceof Object);


console.log(ToyCar.prototype.isPrototypeOf(legoCar));
console.log(Car.prototype.isPrototypeOf(legoCar));
console.log(Object.prototype.isPrototypeOf(legoCar));
