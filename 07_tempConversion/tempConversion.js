const convertToCelsius = function (temp) {
  console.log((temp - 32) * (5 / 9));
  const celsius = (temp - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  console.log(temp * (9 / 5) + 32);
  const farenheight = temp * (9 / 5) + 32;
  return Number(farenheight.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
