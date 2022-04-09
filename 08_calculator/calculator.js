const add = function(val_one, val_two) {
  return val_one + val_two
};

const subtract = function(val_one, val_two) {
	return val_one - val_two
};

const sum = function(arr) {
  return arr.reduce( (x1, x2) => x1 + x2, 0)
};

const multiply = function(arr) {
  if(arr.length){
    return arr.reduce( (x1, x2) => x1 * x2 )
    
  }else{
    return 0
  }

};

const power = function(num, power) {
  powerArray = Array(power).fill(num)
  return powerArray.reduce( (x1, x2) => x1 * x2 )
};

const factorial = function(num) {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
