var cleanTheRoom = function() {
  return new Promise(function(resolve, reject) {
  resolve('You cleaned the room');
  });
};

var removeTheGarbage = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve(msg + ' and removed garbage,')
  });
};

var winIcecream = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve(msg + ' So you get an Icecream');
  });
};

/* cleanTheRoom().then(function(msg) {
  removeTheGarbage(msg).then(function(msg) {
    winIcecream(msg).then(function(msg) {
      console.log(msg);
    });
  });
}); */

cleanTheRoom().then(function(result) {
  return removeTheGarbage(result);
}).then(function(result) {
  return winIcecream(result);
}).then(function(result) {
  console.log('1: Finished - ', result);
});

Promise.all([cleanTheRoom(), removeTheGarbage(), winIcecream()]).then(function () {
  console.log('2: All finished');
});

Promise.race([cleanTheRoom(), removeTheGarbage(), winIcecream()]).then(function () {
  console.log('3: One of them is finished');
});
