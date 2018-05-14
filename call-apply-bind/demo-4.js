let button = function(content) {
  this.content = content;
};

button.prototype.click = function() {
  console.log(this.content, " clicked");
}

let newButton = new button('add');

let looseClick = newButton.click;
looseClick();

let boundButton = newButton.click.bind(newButton);
boundButton();