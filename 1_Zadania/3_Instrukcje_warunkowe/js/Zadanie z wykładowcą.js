//Zadanie 1 - z wykładowcą

var min = 1;
var max = 100;
var number = Math.random() * (max - min) + min;
console.log(number);

if(number > 50) {
  console.log("Hura");
} else {
  console.log("liczba mniejsza niż 50");
}
