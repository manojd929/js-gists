var parent = document.querySelector('#parent');
parent.addEventListener('click', function() {
  alert('parent Clicked');
});

var child = document.querySelector('#child');
child.addEventListener('click', function() {
  alert('child Clicked');
});
