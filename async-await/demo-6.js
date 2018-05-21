console.log('person-1: shows ticket');
console.log('person-2: shows ticket');

const preMovieDrama = async () => {
  
  const promiseWifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => reject('ticket'), 3000);
  });

  let ticket;
  try {
    ticket = await promiseWifeBringsTickets;
  } catch(e) {
    ticket = 'sad face';
  }  
  return ticket;
};

preMovieDrama().then((tkt) => console.log(`person-3 shows ${tkt}`));

console.log('person-4: shows ticket');
console.log('person-5: shows ticket');
