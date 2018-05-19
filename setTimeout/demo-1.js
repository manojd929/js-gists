/* async nature
   setTimeout is part of web api.
   It is natively available in JS.

   available in global scope

   setTimeout(function, milliSeconds);
*/
setTimeout(() => {
  console.log('Greetings');
}, 1000);

let tID;

function set() {
  tID = setTimeout(() => {
    alert(tID);
  }, 4000);
}

function clear() {
  clearTimeout(tID);
}

