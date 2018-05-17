class Mammal {
  constructor(_legs, _name="A") {
    this.legs = _legs;
    this.name = _name;

    this.warmBlooded = true;
  }

  walk() {
    return `${this.name} is walking`;
  }
}

class Bat extends Mammal {
  constructor(_legs, _name, _eatsMeat) {
    super(_legs, _name);
    this.eatsMeat = _eatsMeat;
  }

  fly() {
    return `${this.name} is flying`;
  }

  walk() {
    let holding = this.eatsMeat ? 'Bug' : 'Carrot';
    return `${super.walk()} with a ${holding}`;
  }
}

const fruitBar = new Bat(4, 'Pet', false);
console.dir(fruitBar);
console.log(fruitBar.walk());