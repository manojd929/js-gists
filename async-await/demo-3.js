console.log('person-1: shows ticket');
console.log('person-2: shows ticket');

// async function expression
// async function returns a promise
const preMovieDrama = async () => 'preMovieDrama';

preMovieDrama().then((m) => console.log(m));

console.log('person-4: shows ticket');
console.log('person-5: shows ticket');