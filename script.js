//Ask for players input, rock paper or scissors 


// have computer choose randomly between the three options
//a function that chooses a random number between 3 that correlates with eiter rock paper or scissors



//decide the outcome 



// Main 


let playerPoints;
let compPoints;

const choices = ['Rock', 'Paper', 'Scissors'];

game()



// Game complete


function game() {

    playerPoints = 0;
    compPoints = 0;

    for (let i = 0; i < 5; i++)
    {

        let playerChoice = prompt("Rock, Paper or Scissors?");

        let compChoice = choices[Math.floor(Math.random() * choices.length)];

        chooseWinner(playerChoice, compChoice)

        console.log(playerPoints)
        console.log(compPoints)

    }

    if (playerPoints > compPoints) {
        console.log("Player Wins")
    }
    else if (playerPoints < compPoints) {
        console.log("Computer Wins")
    }
    else  {
        console.log("Draw")
    }

}


// Game algorythym



// Function for 

function printWinner(playerPoints) {
        console.log("You Win!");
}

function printLoser(compPoints) {
        console.log("You Lost :(");
}


function chooseWinner(playerChoice, compChoice) {
    if (playerChoice === compChoice)
        {
            console.log("Draw");

        }
        else if (playerChoice == "Scissors" && compChoice == "Paper")
        {
            printWinner()
            playerPoints+=1;
        }
        else if (playerChoice == "Rock" && compChoice == "Scissors")
        {
            printWinner()
            playerPoints+=1;
        }
        else if (playerChoice == "Paper" && compChoice == "Rock")
        {
            printWinner()
            playerPoints+=1;
        }
        else if (playerChoice == "Paper" && compChoice == "Scissors")
        {
            printLoser()
            compPoints+=1;
        }
        else if (playerChoice == "Scissors" && compChoice == "Rock")
        {
            printLoser()
            compPoints+=1;
        }
        else if (playerChoice == "Rock" && compChoice == "Paper")
        {
            printLoser()
            compPoints+=1;
        } 
    }