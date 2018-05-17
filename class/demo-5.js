class Car {
  constructor(price) {
    this.price = price;
  }

  static sellCar(car) {
    // not supposed to call this inside statuic method
    return `selling for ${car.price}`;
  }
}

class Toyota extends Car {
  constructor(price) {
    super(price);
  }

  static sellCar(car) {
    return `Toyota ${super.sellCar(car)}`;
  }
}

const camary = new Toyota(100);
console.log(Toyota.sellCar(camary));
