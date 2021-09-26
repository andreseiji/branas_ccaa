const OVERNIGHT_RATE = 3.90;
const SUNDAY_RATE = 2.9;
const NORMAL_RATE = 2.1;

const isOvernight = function(date) {
  return date.getHours() >= 22;
}

const isSunday = function(date) {
  return date.getDay() === 0;
}

const calculateRate = function(distance, rate) {
  return distance * rate;
}

const calculateRide = function(dist, date) {
  if (isOvernight(date)) {
    return calculateRate(dist, OVERNIGHT_RATE);
  }
  if (isSunday(date)) {
    return calculateRate(dist, SUNDAY_RATE);
  }
  return calculateRate(dist, NORMAL_RATE);
}

module.exports = {
  calculateRide,
}
