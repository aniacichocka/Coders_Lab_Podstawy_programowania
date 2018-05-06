//String + number
var text = "Ala ma kota";
var number = 87;

var resultAddTextToNumber = text + number;
console.log(typeof resultAddTextToNumber);
// Wynik: Ala ma kota87 -> String

// Zadanie 1 - do samodzielnego wykonania

var number = 3;
var name = "Ola";
var log = true;
var special = null;
var arr = [1,2,3];

var result1 = number + name;
// console.log(result1);
console.log(typeof result1);
//Wynik: 3Ola -> string

var result2 =  name + log;
// console.log(result2);
console.log(typeof result2);
//Wynik: Olatrue -> string

var result3 = special + number;
// console.log(result3);
console.log(typeof result3);
//Wynik: 3 -> number

var result4 = name + special;
// console.log(result4);
console.log(typeof result4);
//Wynik: Olanull ->string
