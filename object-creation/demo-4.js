var peopleDynamicProto = function(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
};

peopleDynamicProto.prototype.printPerson = function() {
  console.log(this.name, this.age, this.city);
};

console.dir(peopleDynamicProto);

var person1 = new peopleDynamicProto('Joe', 21, 'CA');
var person2 = new peopleDynamicProto('Rock', 23, 'LA');

person1.printPerson();
person2.printPerson();

console.dir(person1);
