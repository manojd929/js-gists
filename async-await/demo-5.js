console.log('person-1: shows ticket');
console.log('person-2: shows ticket');

const preMovieDrama = async () => {
  
  const promiseWifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
  const getCandy = new Promise((resolve, reject) => resolve('candy'));
  const getCoke = new Promise((resolve, reject) => resolve('coke'));

  let ticket = await promiseWifeBringsTickets;
  
  let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
  console.log(popcorn, candy, coke);
  return ticket;
};

preMovieDrama().then((tkt) => console.log(`person-3 shows ${tkt}`));

console.log('person-4: shows ticket');
console.log('person-5: shows ticket');
