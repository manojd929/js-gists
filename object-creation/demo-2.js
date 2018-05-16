var peopleConstructor = function(name, age, state) {
  // functions are objects, so adding properties to it
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function() {
    console.log(this.name, this.age, this.state);
  };
};

var person1 = new peopleConstructor('John', 27, 'California');
var person2 = new peopleConstructor('Jill', 21, 'LA');

person1.printPerson();
person2.printPerson();
