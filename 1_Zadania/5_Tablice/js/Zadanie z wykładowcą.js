//Zadanie 1 - z wykładowcą

 var array = [];

 for ( var i = 0; i < 12; i++) {
   array.push(i);
 }
console.log(array);

var array = [];

var min = 1;
var max = 10;

for ( var i = 0; i <10; i++) {
  var number = Math.round(Math.random() * (max - min) + min);
  console.log(number);
  array.push(number);
}
console.log(array);

//pomocnicza tablica przechowująca powtarzające się liczby
var resultArray = [];

for (var i = 0; i < 10; i++) {
  //Jeśli element na pozycji i znajduje się w tablicy array, począwszy od pozycji i+1 to...
  if (array.indexOf(array[i], i + 1) !== -1) {
    //...wypisz w konsoli następujący tekst i...
    console.log('wartość', array[i], ' sie powtarza');

    //sprawdzamy czy przypadkiem w pomocniczej talicy nieznajduje sie znaleziona wartość
    //dodajemy wartośc do tablicy resultArray jesli jeszcze jej tam nie ma

    //...jeśli w tablicy resultArray ten sam element nie występuje, to...
    if (resultArray.indexOf(array[i]) === -1) {
      //...dodaj ten element na koniec tablicy resultArray
    resultArray.push(array[i]);
    }
  }
}
console.log(resultArray.length);

//Zadanie 2 - z wykładowcą

var string = "My name is Bond, James Bond";
var array = string.split(' ');
console.log(array);

for (var i = 0; i < array.length; i++) {
 var word = array[i];
 word = word.replace(',', '');
  console.log(word.length);
}
