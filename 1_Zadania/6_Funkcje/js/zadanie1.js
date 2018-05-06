//Zadanie 1 - z wykładowcą
function FooBar(x) {
  var result = "";

  for (var i = 1; i <= x; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    result += "FOOBAR";
    } else if (i % 3 == 0) {
      result += "Foo";
    } else if (i % 5 == 0) {
      result += "Bar";
    } else{
      result += i;
    }
  }
  return result;
}
console.log (FooBar(15));
