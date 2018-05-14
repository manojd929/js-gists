var prom1 = new Promise(function(resolve, reject) {
  let truth = 5 > 0;

  if (truth) {
    return resolve('Hi Baby');
  } else {
    return reject('Da fail');
  }
});

var a = prom1.then(function(resultVal) {
  console.log(resultVal);
}).catch(function(err) {
  console.log(err);
});
