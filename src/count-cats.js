const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0
  backyard.forEach(elem => {
    elem.forEach(element => {
      if(element === '^^')
        cats += 1
    })
  })
  return cats
};
