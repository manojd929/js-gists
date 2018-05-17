let readonly = function(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Car {
  constructor(color) {
    this.color = color;
  }

  @readonly
  getColor() {
    return this.color;
  }
}

const redCar = new Car('RED');
redCar.getColor = function() {
  return 'Blah Blah I overrided it Haha';
}
console.log(redCar.getColor());

/* let descriptor = {
  value: function() {
    return this.color;
  },
  writable: false,
  configurable: true,
  enumerable: true,
};

descriptor = readonly(Car.prototype, 'getColor', descriptor) || descriptor;
Object.defineProperty(Car.prototype, 'getColor', descriptor);
*/

