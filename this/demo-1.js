this.table = 'window table';
console.log(this.table); // console.log(window.table);

this.garage = {
  table: 'garage table',
  cleanTable() {
    console.log("cleaning this.garage ", this.table);
  }
};
console.log("this.garage.table ", this.garage.table);
this.garage.cleanTable();

let johnsGarage = {
  table: 'johns table',
  cleanTable() {
    console.log('cleaning johnsgarage table ', this.table);
  }
};
// console.log(this.johnsGarage.table);
// cannot read property as johnsGarage is a private variable
console.log("johnsGarage.table ", johnsGarage.table);
johnsGarage.cleanTable();

