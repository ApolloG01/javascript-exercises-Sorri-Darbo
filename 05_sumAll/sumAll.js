const sumAll = function (...arg) {
  let sum = 0;

  if (arg[0] < arg[1]) {
    for (let i = arg[0]; i <= arg[1]; i++) {
      sum = sum + i;
    }

    if (
      typeof arg[1] === "number" &&
      arg[0] > 0 &&
      arg[1] > 0 &&
      Number.isInteger(arg[0]) &&
      Number.isInteger(arg[1]) &&
      typeof arg[1] === "number"
    ) {
      console.log(typeof [arg[1]]);
      return sum;
    } else {
      return "ERROR";
    }
  } else if (arg[0] > arg[1]) {
    for (let i = arg[1]; i <= arg[0]; i++) {
      sum = sum + i;
    }
    console.log(sum);
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
