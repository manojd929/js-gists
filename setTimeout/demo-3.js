var i = setInterval(() => {
  console.log(1);
}, 1000);
console.log(typeof(i));
console.dir(i);

clearInterval(i);
