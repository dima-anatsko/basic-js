const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  let numberActivity = +sampleActivity;
  let result = Math.ceil(
    (Math.log(MODERN_ACTIVITY / numberActivity) / 0.693) * HALF_LIFE_PERIOD
  );
  return result >= 0 && isFinite(result) ? result : false;
};
