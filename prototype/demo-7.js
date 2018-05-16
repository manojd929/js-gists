let Mammal = function(legs) {
  this.legs= legs;
};
Mammal.prototype = {
  walk() {
    return 'walking';
  },
  sleep() {
    return 'sleeping';
  },
};

let Bat = function(legs, isVegetarian) {
  // like super()
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};
console.dir(Bat);
Bat.prototype = Object.create(Mammal.prototype);
console.dir(Bat);
// setting it back again
Bat.prototype.constructor = Bat;
Bat.prototype.fly = function() {
  return 'Flying';
};
console.dir(Bat);

let fruitBat = new Bat(2, true);
console.dir(fruitBat.sleep());
console.dir(fruitBat.fly());
