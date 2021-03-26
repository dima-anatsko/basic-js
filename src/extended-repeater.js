const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const addition = "addition" in options ? options.addition : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const secondString = new Array(additionRepeatTimes)
    .fill(addition + "")
    .join(additionSeparator);
  return new Array(repeatTimes).fill(str + secondString).join(separator);
};
