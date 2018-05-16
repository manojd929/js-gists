// Every object gets a shared space
var peopleProto = function() {

};
// create Defaults
peopleProto.prototype.name = "No Name";
peopleProto.prototype.age = 0;
peopleProto.prototype.city = "No city";
peopleProto.prototype.printPerson = function() {
  console.log(this.name, this.age, this.city);
};

console.dir(peopleProto);

var person1 = new peopleProto();
person1.name = "John";
person1.printPerson();

console.dir(person1);
console.log('age' in person1);
console.log(person1.hasOwnProperty('age'));
