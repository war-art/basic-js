const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
		return members.map(e => {
      if(typeof(e) == "string") 
        return e.trim().toUpperCase()[0];}).sort().join("");
	} else {
		return false;
	}
};
