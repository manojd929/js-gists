'use strict';

// constructor function
let createRoom = function(name) {
  this.table = `${name} table`;
}

this.name = 'this';
const thisRoom = new createRoom(this.name);
const jillsRoom = new createRoom('jill');
const jacksRoom = new createRoom('jack');

const cleanTable = function(soap) {
  console.log('cleaning ', this.table, ' using ', soap);
};

cleanTable.call(thisRoom, 'some soap');
cleanTable.call(jillsRoom, 'some soap');
cleanTable.call(jacksRoom, 'some soap');