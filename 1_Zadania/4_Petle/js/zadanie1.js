//Zadanie 1 - z wykładowcą

var x = 8;
var result = 1;

for (var i = 1; i <= x; i++) {
  result*=i;
}
console.log(result);

// drugi sposób
var j = 1;
var resultWhile = 1;

while (j <=x ) {
  resultWhile *= j;
  j++;
}
console.log(resultWhile);
