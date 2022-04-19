// Connect variables from html
let playerRock=document.querySelector("#player-rock");
let playerScissors=document.querySelector("#player-scissors");
let playerPaper=document.querySelector("#player-paper");
let pcRock=document.querySelector("#pc-rock");
let pcScissors=document.querySelector("#pc-scissors");
let pcPaper=document.querySelector("pc-paper");

// Display the element chosen by player, and make those not selected disappear from the page;
playerRock.addEventListener("click", ()=>{
  playerScissors.style.display="none";
  playerPaper.style.display="none";
})

playerScissors.addEventListener("click", ()=>{
  playerRock.style.display="none";
  playerPaper.style.display="none";
})

playerPaper.addEventListener("click", ()=>{
  playerRock.style.display="none";
  playerScissors.style.display="none";
})

// PC choose Rock, Scissors or Paper randomly
