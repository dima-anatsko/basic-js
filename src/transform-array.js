const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw "Error type";
  }
  let result = [];
  let blackList = new Set();
  blackList.add(-1);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        if (!blackList.has(i - 1)) {
          result.pop();
        }
        break;
      case "--double-prev":
        if (!blackList.has(i - 1)) {
          result.push(arr[i - 1]);
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case "--discard-next":
        blackList.add(i + 1);
        break;
      default:
        if (!blackList.has(i)) {
          result.push(arr[i]);
        }
    }
  }
  return result;
};
