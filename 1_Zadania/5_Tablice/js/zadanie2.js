var array = [];
var min = 1;
var max = 60;
var array2 = [];

for (var i = 0; i < 10; i++) {
  var number = Math.round(Math.random() * (max - min) + min);
  array.push(number);
  if (array[i] % 2 === 0) {
    array2.push(array[i]);
  }
}
console.log(array2);
