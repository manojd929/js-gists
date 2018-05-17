const jsSkills = {
  hasSkill() {
    return true;
  },
};

const engDegree = {
  hasDegree() {
    return true;
  },
};

const backEndSkill = {
  knowsBackend() {
    return true;
  },
};

const jsEngineer = Object.assign({}, jsSkills, engDegree);
const fullStackEngineer = Object.assign({}, jsSkills, engDegree, backEndSkill);

console.dir(jsEngineer);
console.dir(fullStackEngineer);
