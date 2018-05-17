// object creation types

// Regular functions
const Car = function(color) {
  this.color = color;
};
const redCar = new Car('RED');
console.dir(redCar);

// Factory function
let Bike = function(color) {
  return Object.assign({}, {
    color: color
  });
}
let blackBike = Bike('BLACK'); // no new keyword here
console.dir(blackBike);

// Factory function with preserved state or closure
let MovingCar = function(color) {
  let moving = false;
  return Object.assign({}, {
    color: color,
    drive() {
      moving = true;
      return this;
    },
    isMoving() {
      return moving;
    },
  });
};
let blueCar = MovingCar('BLUE');
console.log(blueCar.drive().isMoving());
console.dir(blueCar);
