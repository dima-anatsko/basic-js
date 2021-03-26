const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, start = 1) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.push(this.calculateDepth(arr[i], start + 1));
      }
    }
    return result.length > 0 ? Math.max(...result) : start;
  }
};
