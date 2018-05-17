class Car {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

Object.defineProperty(Car.prototype, 'getColor', {
  value: function() {
    return this.color;
  },
  writable: false,
  configurable: true,
  enumerable: true,
});

const redCar = new Car('RED');
redCar.getColor = function() {
  return 'Blah Blah I overrided it Haha';
}
console.log(redCar.getColor());
