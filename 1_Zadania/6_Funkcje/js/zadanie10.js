//Zadanie 8 - do samodzielnego wykonania

function calculateTip(amount, raiting) {

var text1 = "Opis nieczytelny";
var result= "";

  if (raiting === "Bardzo dobra obsluga") {
    result = amount *= 0.25;

  } else if (raiting === "Dobra obsluga") {
    result = amount *= 0.20;

  } else if (raiting === "Srednia obsluga") {
    result = amount *= 0.15;

  } else if (raiting === "Zla obsluga") {
    result = amount *= 0;

  } else {
    result = "Opis nieczytelny";
  }
  return result;
}
console.log(calculateTip(200));
