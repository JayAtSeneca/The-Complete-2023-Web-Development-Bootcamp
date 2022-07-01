let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSrc = "images/" + randomDiceImage;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSrc2 = "images/" + randomDiceImage2;
let randomImage = document.querySelectorAll("img")[0];
let randomImage2 = document.querySelectorAll("img")[1];
randomImage.setAttribute("src", randomImageSrc);
randomImage2.setAttribute("src", randomImageSrc2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}