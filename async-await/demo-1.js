console.log('person-1: shows ticket');
console.log('person-2: shows ticket');

const promiseWifeBringsTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 3000);
});

promiseWifeBringsTickets.then((tkt) => {
  console.log(`person-3: shows ${tkt}`);
});

console.log('person-4: shows ticket');
console.log('person-5: shows ticket');
