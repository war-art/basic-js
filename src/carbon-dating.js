const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sa = sampleActivity;
  if(typeof(sa) == 'string') {
    sa = parseFloat(sa);
    if(sa <= 0 || sa > MODERN_ACTIVITY || !isFinite(sa)) return false;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sa) / (0.693 / HALF_LIFE_PERIOD));
    } else return false;
};
