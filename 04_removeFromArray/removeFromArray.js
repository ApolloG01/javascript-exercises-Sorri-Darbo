const removeFromArray = function (a, ...remove) {
  console.log(a);
  console.log(remove);

  const newArray = a.filter((item) => !remove.includes(item));
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

// const removeFromArray = function (...remove) {
//   console.log(arguments.length)

// for(let i = 0; i <= arguments.length; i++){

// if()
// const arg1 = arguments[0];
// const arg2 = arguments[1];
// const arg3 = arguments[2];

// console.log(arg1)
// console.log(arg2)
// console.log(arg3)

//   }
// }
// console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"))
