var parent = document.querySelector('#parent');
// useCapture is set to true
parent.addEventListener('click', function() {
  alert('parent Clicked');
}, true);


var child = document.querySelector('#child');
// useCapture is set to true
child.addEventListener('click', function() {
  alert('child Clicked');
}, true);
