let mammal = function(legs) {
  this.legs = legs;
}

let cat = function(legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
}

let lion = new cat(4, true); // attention
console.log(lion);
