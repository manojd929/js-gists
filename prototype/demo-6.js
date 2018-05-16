const Car = function() {
};
Car.prototype = {
  print() {
    console.log("I am a Car");
  }
};

const ToyCar = function() {
};
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.print = function() {
  console.log("I am a ToyCar");
};

const TransformerCar = function() {
};
TransformerCar.prototype = Object.create(ToyCar.prototype);
TransformerCar.prototype.printTransformer = function() {
  console.log("I am a Transformer");
};

const c1 = new Car();
const c2 = new ToyCar();
const c3 = new TransformerCar();

c1.print();
c2.print();
c3.print();
c3.printTransformer();