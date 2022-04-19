// Connect variables from html
let playerRock=document.querySelector("#player-rock");
let playerScissors=document.querySelector("#player-scissors");
let playerPaper=document.querySelector("#player-paper");
let pcRock=document.querySelector("#pc-rock");
let pcScissors=document.querySelector("#pc-scissors");
let pcPaper=document.querySelector("pc-paper");
let pcChoice=[pcRock, pcScissors, pcPaper];
let youWin=document.querySelector("#you-win");
let youLose=document.querySelector("#you-lose");
let tieResult=document.querySelector("#tie");

// PC choose Rock, Scissors or Paper randomly
function pcSelect(arr){
  // produce random seed integer from 0-2
  let randomSeed=Math.floor(Math.random()*3); 
  let pcSelected=arr[randomSeed];
  // change the display of the chosen element from "none" to "block"
  pcSelected.style.display="block";
  return pcSelected;
  }

// Compare Player vs PC
function gameOutcome(player,PC){
  if(player==playerRock && PC==pcRock){
    tieResult.style.display="block";
  }else if(player==playerRock && PC==pcScissors){
    youWin.style.display="block";
  }else if(player==playerRock && PC==pcPaper){
    youLose.style.display="block";
  }else if(player==playerScissors && PC==pcRock){
    youLose.style.display="block";
  }else if(player==playerScissors && PC==pcScissors){
    tieResult.style.display="block";
  }else if(player==playerScissors && PC==pcPaper){
    youWin.style.display="block";
  }else if(player==playerPaper && PC==pcRock){
    youWin.style.display="block";
  }else if(player==playerPaper && PC==pcScissors){
    youLose.style.display="block";
  }else if(player==playerPaper && PC==pcPaper){
    tieResult.style.display="block";
  }else{
    console.error();
  }
}

  // Display the element chosen by player, and make those not selected disappear from the page;
playerRock.addEventListener("click", ()=>{
  playerScissors.style.display="none";
  playerPaper.style.display="none";
  gameOutcome(playerRock,pcSelect(pcChoice));
})

playerScissors.addEventListener("click", ()=>{
  playerRock.style.display="none";
  playerPaper.style.display="none";
  gameOutcome(playerScissors,pcSelect(pcChoice));
})

playerPaper.addEventListener("click", ()=>{
  playerRock.style.display="none";
  playerScissors.style.display="none";
  gameOutcome(playerPaper,pcSelect(pcChoice));
})