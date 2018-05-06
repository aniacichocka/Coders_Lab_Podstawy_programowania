//Zadanie 7 - do samodzielnego wykonania

function rockPaperScissors(player1, player2) {
  var text1 = "Gracz 1 wygrał"
  var text2 = "Gracz 2 wygrał"
  var text3 = "Remis"
  var text4 = "Błędne informacje"


  if (player1 === "papier" && player2 === "kamien" || player1 === "nozyce" && player2 === "papier" ||
player1 === "kamien" && player2 === "nozyce") {

    text = text1;

  } else if (player1 === "papier" && player2 === "nozyce" || player1 === "nozyce" && player2 === "kamien" ||
player1 === "kamien" && player2 === "papier") {

    text = text2;

  } else if (player1 === "papier" && player2 === "papier" || player1 === "nozyce" && player2 === "nozyce" || player1 === "kamien" && player2 === "kamien" ) {

    text = text3;

  } else {

    text = text4;
  }
  return text
}
console.log(rockPaperScissors("papier", "kamien"));
