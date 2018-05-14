let obj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log('parse called');
  },
  render() {
    // that = this;
    this.asyncGet(function() {
      // scope initially here is of asyncGet, so bind it to outer this
      // that.parse
      this.parse();
    }.bind(this));
  }
};

obj.render();