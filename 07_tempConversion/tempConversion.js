const ftoc = function(temp) {
  let converted = -1;
  //toFixed() converts into a string
  converted = ((temp - 32)*(5/9)).toFixed(1);
  return parseFloat(converted);
};

const ctof = function(temp) {
  let converted = -1;
  converted = ((temp * (9/5)) + 32).toFixed(1);
  //this turns it back into a float
  return parseFloat(converted);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
