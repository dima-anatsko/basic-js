const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((count, item) => item === '^^' ? ++count : count, 0);
};
