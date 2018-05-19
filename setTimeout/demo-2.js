console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

console.log(4);

/*
  Execution Stack -> Event Loop

  EventTable          EventQueue


  setTimeout goes to eventtable and waits
  then goes to eventQueue

  Queue has lower priority than stack
  once stack is empty then queue is executed


*/