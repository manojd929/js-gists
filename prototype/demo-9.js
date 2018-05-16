// Object.setPrototypeOf(descObj, srcObj);

let toyota = {
  drive() {
    return 'Driving Toyota';
  }
};

let camry = {
  drive() {
    return `${super.drive()} Camry`;
  }
};

Object.setPrototypeOf(camry, toyota); // camry.__proto__ = toyota;
console.dir(camry.drive());
