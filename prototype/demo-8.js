// Object.setPrototypeOf(descObj, srcObj);

let toyota = {
  drive() {
    return 'Driving Toyota';
  }
};

let camry = {
  wifi() {
    return 'using WIFI';
  }
};

// console.dir(camry);
Object.setPrototypeOf(camry, toyota);
console.dir(camry);
