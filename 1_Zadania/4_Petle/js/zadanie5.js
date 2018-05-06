//Zadanie 3 - do samodzielnego wykonania

var n = 5;
var line = "";

for (var i = 1; i <= n; i++) {
  line = "";
  for (var j = 1; j <= n; j++) {
    if ((i + j) % 2 != 0) {
    line += "*";
    } else {
    line += " ";
    }
  }
console.log(line);
}
