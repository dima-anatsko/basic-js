const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .map((s) => (typeof s === "string" ? s.trim().toUpperCase()[0] : ""))
    .sort()
    .join("");
};
