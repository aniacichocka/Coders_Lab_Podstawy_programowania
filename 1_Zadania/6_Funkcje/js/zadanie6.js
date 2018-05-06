//Zadanie 4 - do samodzielnego wykonania

function sum(array) {
  result = 0;

  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
// var array =[1,2,3,4,5,6,7];
// console.log(sum(array));
console.log(sum([1,2,3,4,5,6,7]));
