console.log('person-1: shows ticket');
console.log('person-2: shows ticket');

const preMovieDrama = async () => {
  
  const promiseWifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
  const getButter = new Promise((resolve, reject) => resolve('butter'));

  let ticket = await promiseWifeBringsTickets;
  console.log(`wife: Heres the ${ticket}`);
  console.log('husband: we should go in');
  console.log('wife: No, I am hungry');

  let popcorn = await getPopcorn;
  console.log(`husband: i got some ${popcorn}`);
  console.log('husband: we should go in');
  console.log('wife: No, I need sone butter on my porpcorn');

  let butter = await getButter;
  console.log(`husband: got it ${butter}`);

  return ticket;
};

preMovieDrama().then((tkt) => console.log(`person-3 shows ${tkt}`));

console.log('person-4: shows ticket');
console.log('person-5: shows ticket');