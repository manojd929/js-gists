class Car {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

const redCar = new Car('RED');

redCar.getColor = function() {
  return 'Blah Blah I overrided it Haha';
}

console.log(redCar.getColor());
