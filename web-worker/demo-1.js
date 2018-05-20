// Chrome does not allow to load web worker from file protocol
// workaround is required

this.onmessage = function(e) {
  if (e.data.addThis !== undefined) {
    this.postMessage({ result: e.data.addThis.num1 + e.data.addThis.num2 });
  }
}