function computerPlay(){
    selection = Math.floor(Math.random() * (3 - 0) );
    switch(selection){
        case 0: 
            selection = "rock";
            break;
        case 1:
            selection = "paper";
            break;
        case 2:
            selection = "scissors";
            break;
        }
    return selection;
}

function playerPlay(){
    selection = selection.toLowerCase();
    while(selection != "rock" && selection != "paper" && selection != "scissors" ){
        console.log("invalid option, please select Rock, paper or Scissors");
        selection = window.prompt("Rock, paper or Scissors?");
        selection = selection.toLowerCase();
    }  
    return selection;
}

function gameRound(computer,player){
    let outcome;
    switch(player){
        case "rock": 
            if(computer == "rock") outcome = "draw";
            else if(computer == "paper") outcome = "lost";
            else outcome = "win";
            break;
        case "paper": 
            if(computer == "rock") outcome = "win";
            else if(computer == "paper") outcome = "draw";
            else outcome = "lost";
            break;
        case "scissors": 
            if(computer == "rock") outcome = "lost";
            else if(computer == "paper") outcome = "win";
            else outcome = "draw";
            break;
    }
    return outcome;

}
function generateMessage(outcome,player, computer){
    switch(outcome){
        case "win":
            message = `You win,${player} beats ${computer}`
            break;
        case "lost":
            message = `You lose, ${computer} beats ${player}`
            break;
        case "draw":
            message = `It's a draw! both choose ${player}`
            break; 
    }
    return message;
}

function game(playerSelect){
    let computerSelect = computerPlay();
    let outcome = gameRound(computerSelect, playerSelect);
    if(outcome == "win") playerScore++;
    else if(outcome == "lost") computerScore++;
    console.log(generateMessage(outcome, playerSelect, computerSelect));
    console.log(playerSelect, computerSelect)
    console.log(playerScore,computerScore)
}
let playerScore = 0;
let computerScore = 0;
let gameButtons;
gameButtons = document.querySelectorAll("button");
gameButtons.forEach(element => {
    element.addEventListener("click",(e)=> game(e.target.id))
    
});
