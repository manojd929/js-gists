var obj = function() {
  this.i = 0;

  this.add = function(i) {
    this.i += i;
    return this;
  };

  this.subtract = function(i) {
    this.i -= i;
    return this;
  };

  this.print = function() {
    console.log(this.i);
  };
};

var x = new obj();

x.add(5);
x.subtract(10);
x.print();

// we can't do this yet as add is not returning anything until now
// so add return this at the end of the methods
// x.add(5).subtract(10).print();

var y = new obj();
y.add(5).subtract(10).print();
