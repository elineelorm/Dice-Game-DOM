document.query

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var message;

if (randomNumber1 === randomNumber2){
    message = "Draw!";
}
else if (randomNumber1 > randomNumber2){
    message = "🚩 Player 1 Wins!"
}
else {
    message = "Player 2 Wins! 🚩"
}

document.querySelector(".container h1").innerHTML = message;