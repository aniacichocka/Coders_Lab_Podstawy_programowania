// Zadanie 2  - z wykładowcą

function power(a, n) {
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= a;
  }
  return result;
}
//Przypisanie wartości zwróconej przez funkcje do zmiennej
var somePower = power(2, 3);
console.log(somePower);

//Przyklad wielokrotnego użycia tej samej funkji
console.log('2^3 = ', power(2, 3));
console.log('2^4 = ', power(2, 4));
console.log('2^5 = ', power(2, 5));
