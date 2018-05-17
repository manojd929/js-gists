let lipstick =function(color) {
  return function(target) {
    target.lips = color;
  }
};

let earrings = function(target) {
  target.hasEarring = true;
}

@earrings
@lipstick('black')
class Girl {

}

console.log(`Her lips are ${Girl.lips}`);
console.log(`Has earrings ${Girl.hasEarring}`);
