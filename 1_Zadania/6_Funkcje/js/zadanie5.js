//Zadanie 3 - do samodzielnego wykonania

function number(a, b, c) {
  var result = "";

  if (a > b && a > c) {
   result = a;
  } else if (b > a && b > c) {
   result = b;
  } else {
   result = c;
  }
  return result;
}

console.log(number(3, 4, 6));
