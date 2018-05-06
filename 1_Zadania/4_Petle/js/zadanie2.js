//Zadanie 2 -  zwykładowcą

var n = 5;
var stars = "";

// 1 rozwiązanie
// for (var i = 1; i <= n; i++) {
//   if (i == 1 || i == n) {
//   // console.log('*****');
//    stars += "* * * * *\n"; //złamać linię
//   } else {
//   // console.log('*   *');
//    stars += "*       *\n";
//   }
// }
// console.log(stars);


//2 rozwiązanie
for (var i = 1; i <= n; i++) {
  if (i == 1 || i == n){
    for (var j = 1; j <= n; j++) {
      stars += '* ';
    }
    stars += '\n';
  } else {
    stars += '*';
    for (var j = 1; j <= 2*n-3; j++) {
      stars += ' ';
  }
  stars += '*';
  stars += '\n';
}
}
console.log(stars);
