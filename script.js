// User submits his option
// PC calculates its random option
// if options are same return a tie, else compare the victorious variable
// Print out result message in the paragraphs below

var playermsg = document.getElementById("plOption");
var enemymsg = document.getElementById("pcOption");
var resultmsg = document.getElementById("result");
var submit = document.getElementById("sub");

function gameStart() {
    let playerOpt = document.getElementById("option").value.toUpperCase();
    let enemyOpt = Math.floor(Math.random() * 3) +1;
    if (enemyOpt === 1) {
        enemyOpt = "ROCK";
  } else if (enemyOpt === 2) {
        enemyOpt = "PAPER";
  } else if (enemyOpt === 3) {
        enemyOpt = "SCISSORS";
  }
        if (playerOpt === "ROCK" && enemyOpt === "SCISSORS" || playerOpt === "SCISSORS" && enemyOpt === "PAPER" || playerOpt === "PAPER" && enemyOpt === "ROCK") {
            //return a win
            playermsg.textContent = "Player picked " + playerOpt;
            enemymsg.textContent = "Computer picked " + enemyOpt;
            resultmsg.textContent = "Player wins!";
            console.log(playerOpt + " " + enemyOpt);
        } else if (playerOpt === "SCISSORS" && enemyOpt === "ROCK" || playerOpt === "PAPER" && enemyOpt === "SCISSORS" || playerOpt === "ROCK" && enemyOpt === "PAPER") {
            //return a lose
            playermsg.textContent = "Player picked " + playerOpt;
            enemymsg.textContent = "Computer picked " + enemyOpt;
            resultmsg.textContent = "Computer wins!";
            console.log(playerOpt + " " + enemyOpt);
        }
        if (playerOpt === enemyOpt) {
            //return a Tie
            playermsg.textContent = "Player picked " + playerOpt;
            enemymsg.textContent = "Computer picked " + enemyOpt;
            resultmsg.textContent = "It's a tie!";
            console.log(playerOpt + " " + enemyOpt);
        };

};

submit.addEventListener("click", gameStart);