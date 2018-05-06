var a = [1,2,3,4,5,6,7];
var sum = 0;
var mean = 0;

for (var i = 0; i < a.length; i++) {
  sum = sum + a[i];
  mean = sum / a.length;
}
console.log(mean);
