'use strict';

let createRoom = function(name) {
  this.table = `${name}s table`;
}
createRoom.prototype.cleanTable = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};

const jillsRoom = new createRoom('jill');
const jacksRoom = new createRoom('jack');
jillsRoom.cleanTable('some soap');
jacksRoom.cleanTable('some soap');