// let has block scope
// new i for every loop
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let, set time out - i: ", i);
  }, 1000);
  console.log("let, i: ", i);
}

// var has function scope
// changes i's value, not a new variable
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var, set time out - i: ", i);
  }, 1000);
  console.log("var, i: ", i);
}

//IIFE
for (var i = 0; i < 3; i++) {
  ((i) => {setTimeout(() => {
      console.log("IIFE var, set time out - i: ", i);
    }, 1000);
  })(i);
  console.log("IIFE var, i: ", i);
}