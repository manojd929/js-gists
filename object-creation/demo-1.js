// This function behaves like a factory

var peopleFactory = function(name, age, state) {

  var temp = {}; // var temp = new Object();

  temp.age = age;
  temp.name = name;
  temp.state = state;
  temp.printPerson = function() {
    console.log(this.name, this.age, this.state);
  };

  return temp;
};

var person1 = peopleFactory('John', 23, 'California');
var person2 = peopleFactory('Jill', 27, 'San Jose');

person1.printPerson();
person2.printPerson();