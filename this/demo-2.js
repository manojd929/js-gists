'use strict';

this.table = 'window table';

const cleanTable = function(soap) {
  const innerFunction = function(soap) {
    console.log(`cleaning ${this.table} using ${soap}`);
  }
  innerFunction.call(this, soap);
  //----------or --------------
  innerFunction.bind(this)(soap);
};

this.garage = {
  table: 'garage table',
};

let johnsGarage = {
  table: 'johnsGarage table',
};

cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'rexona soap');
cleanTable.call(johnsGarage, 'dettol');