let lipstick = function(target) {
  target.lips = 'Pink';
}

@lipstick
class Girl {

}

console.log(`Her lips are ${Girl.lips}`);