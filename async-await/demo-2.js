console.log('person-1: shows ticket');
console.log('person-2: shows ticket');

const promiseWifeBringsTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 3000);
});

const getPopcorn = promiseWifeBringsTickets.then((tkt) => {
  console.log('wife: Heres the ticket');
  console.log('husband: we should go in');
  console.log('wife: No, I am hungry');

  return new Promise((resolve, reject) =>
    resolve(`${tkt} popcorn`)
  );
});

const getButter = getPopcorn.then((tkt) => {
  console.log('husband: i got some popcorn');
  console.log('husband: we should go in');
  console.log('wife: No, I need sone butter on my porpcorn');

  return new Promise((resolve, reject) =>
    resolve(`${tkt} butter`)
  );
});

getButter.then((msg) => console.log(msg));

console.log('person-4: shows ticket');
console.log('person-5: shows ticket');
