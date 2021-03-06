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
    resultsDisplay.textContent =`Player: ${playerScore}    Computer: ${computerScore}` ;
    if (playerScore == 5 || computerScore ==5){
        gameContainer.textContent = "";
        let restart = document.createElement("button");
        restart.textContent = "restart";
        restart.addEventListener("click", () => restartGame())
        gameContainer.appendChild(restart)

    }
}
function restartGame(){
    playerScore = 0
    computerScore = 0
    let rock = document.createElement("button");
    let paper = document.createElement("button");
    let scissors = document.createElement("button");
    rock.setAttribute("id","rock");
    paper.setAttribute("id","paper");
    scissors.setAttribute("id","scissors");
    rock.textContent = "rock";
    paper.textContent = "paper"
    scissors.textContent = "scissors"
    gameContainer.textContent="";
    gameContainer.appendChild(rock);
    gameContainer.appendChild(paper);
    gameContainer.appendChild(scissors);
    let gameButtons = document.querySelectorAll("button");
    gameButtons.forEach(element => {
        element.addEventListener("click",(e)=> game(e.target.id))
        
    });
}
let playerScore = 0;
let computerScore = 0;

let resultsDisplay = document.querySelector("#results p");
let gameContainer = document.getElementById("gameContainer");
restartGame()