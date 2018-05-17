class Car {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }

  static comparePrice(car1, car2) {
    return Math.abs(car1.price - car2.price);
  }

  getPrice() {
    return this.price;
  }
}

const redCar = new Car('Red', 100);
const blackCar = new Car('Red', 90);

console.log(Car.comparePrice(redCar, blackCar));
