const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))
    return false

  return members
      .filter(elem => typeof elem === "string")
      .map(elem => elem.trim()[0].toUpperCase())
      .sort()
      .join('')
};


