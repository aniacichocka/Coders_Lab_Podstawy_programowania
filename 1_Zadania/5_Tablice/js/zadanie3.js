var a1 = [2,4,7,8,5];
var a2 = [4,8,7,1,9];

for (var i = 0; i < a1.length; i++) {
  for (var j = 0; j < a2.length; j++) {
    if (a1[i] === a2[j]) {
      console.log(a1[i]);
    }
  }
}
