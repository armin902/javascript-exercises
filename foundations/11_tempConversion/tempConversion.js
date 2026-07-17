const convertToCelsius = function(fahrenheitInput) {
  let celsiusConversion = (fahrenheitInput - 32) * (5/9);
  return Math.round(celsiusConversion * 10) / 10;
};

const convertToFahrenheit = function(celsiusInput) {
  let fahrenheitConversion = (celsiusInput * (9/5) + 32);
  return Math.round(fahrenheitConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
