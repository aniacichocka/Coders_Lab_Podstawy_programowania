//Zadanie 6 - do samodzielnego wykonania

function rentCost(days) {
  var cost = "";
  var numbersOfWeek = Math.floor(days / 7);

  if (days === 1) {
    cost = days * 200;

  } else if (days >= 2 && days <= 3) {
    cost = days * 180;

  } else if (days >= 4 && days <= 7) {
    cost = days * 160;

  } else if (days >= 8) {
    cost = days * 150;
  }

  if (numbersOfWeek >= 1) {
    cost -= 50;

   }
   return cost;
}
console.log(rentCost(8));
