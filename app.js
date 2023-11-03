const signs = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const playerName = prompt("whats your name :")



const rockbtn = document.querySelector(".rockbtn");
const paperbtn = document.querySelector(".paperbtn");
const scissorbtn = document.querySelector(".scissorbtn");
const playerSign = document.querySelector(".playerSign")
const playerscore = document.querySelector(".playerScore")
const computerSign = document.querySelector(".computerSign")
const computerscore = document.querySelector(".computerScore")
const restartbtn= document.querySelector(".restart")
const banner= document.querySelector(".banner")
function playRound(playerChoice, computerChoice) {
    console.log("computer : " + computerChoice);
    console.log("player : " + playerChoice);

    if (playerChoice === computerChoice) {
        console.log("It's a TIE");
        banner.textContent="It's a TIE"
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log('You are the winner of this round');
        banner.textContent='You are the winner of this round'
        playerScore++;
       
    } else {
        console.log('Computer is the winner of this round');
        banner.textContent="Computer is the winner of this round"
        computerScore++;
        
    }

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    computerscore.textContent = "Computer : "+computerScore
    playerscore.textContent = playerName+" : "+playerScore
}

function game() {
    restartbtn.textContent=""
    rockbtn.addEventListener('click', function () {
        playerSign.textContent="✊"
        const playerChoice = "rock";
        let computerChoice = signs[Math.floor(Math.random() * 3)];
        if (computerChoice === "rock"){
            computerSign.textContent="✊"
        }
        else if (computerChoice === "paper"){
            computerSign.textContent="✋"
        }
        else if(computerChoice=== "scissors"){
            computerSign.textContent="✌"
        }
        playRound(playerChoice, computerChoice);
        checkGameResult();
        
    });

    paperbtn.addEventListener('click', function () {
        playerSign.textContent="✋"
        const playerChoice = "paper";
        let computerChoice = signs[Math.floor(Math.random() * 3)];
        if (computerChoice === "rock"){
            computerSign.textContent="✊"
        }
        else if (computerChoice === "paper"){
            computerSign.textContent="✋"
        }
        else if(computerChoice=== "scissors"){
            computerSign.textContent="✌"
        }
        playRound(playerChoice, computerChoice);
        checkGameResult();
        
    });

    scissorbtn.addEventListener('click', function () {
        playerSign.textContent="✌"
        const playerChoice = "scissors";
        let computerChoice = signs[Math.floor(Math.random() * 3)];
        if (computerChoice === "rock"){
            computerSign.textContent="✊"
        }
        else if (computerChoice === "paper"){
            computerSign.textContent="✋"
        }
        else if(computerChoice=== "scissors"){
            computerSign.textContent="✌"
        }
        playRound(playerChoice, computerChoice);
        checkGameResult();
        
    });
}

function checkGameResult() {
    if (playerScore >= 5) {
        console.log('You win the game!');
        banner.textContent=playerName+" won the game 😎! "
        banner.style.color="green"
        restartbtn.textContent="↻"
        playerscore.textContent = "0"
        computerscore.textContent = "0"
        playerScore = 0
        computerScore  =0
    } else if (computerScore >= 5) {
        console.log('Computer wins the game!');
        banner.textContent='Computer won the game 😞!'
        banner.style.color ="red"
        restartbtn.textContent="↻"
        playerscore.textContent = "0"
        computerscore.textContent = "0"
        playerScore = 0
        computerScore  =0
    }
}

function restartGame() {
    location.reload(); // Refresh the page
}

restartbtn.addEventListener('click', restartGame);


game();


// function computerlogo(){
//     if (computerChoice === "rock"){
//         computerSign.textContent="✊"
//     }
//     else if (computerChoice === "paper"){
//         computerSign.textContent="✋"
//     }
//     else if(computerChoice=== "scissors"){
//         computerSign.textContent="✌"
//     }
// }