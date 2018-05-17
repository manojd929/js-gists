const humanFactory = function(obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return isCrying;
    }
  });
};

const flyFactory = function(obj) {
  let isFlying = false;

  return Object.assign({}, obj, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying() {
      return isFlying;
    }
  });
};

const superMan = humanFactory(flyFactory({}));
console.dir(superMan);

console.log(superMan.fly().cry().isCrying());
