//Ask for players input, rock paper or scissors 


// have computer choose randomly between the three options
//a function that chooses a random number between 3 that correlates with eiter rock paper or scissors



//decide the outcome 



let playerpoints;
let comppoints;

const choices = ['Rock', 'Paper', 'Scissors'];

game()






function game() {

    playerpoints = 0;
    comppoints = 0;

    for (let i = 0; i < 5; i++)
    {

        let playerchoice = prompt("Rock, Paper or Scissors?");

        let compchoice = choices[Math.floor(Math.random() * choices.length)];

        choosewinner(playerchoice, compchoice)

        console.log(playerpoints)
        console.log(comppoints)

    }

    if (playerpoints > comppoints) {
        console.log("Player Wins")
    }
    else if (playerpoints < comppoints) {
        console.log("Computer Wins")
    }
    else 
    {
        console.log("Draw")
    }

}

function printwinner(playerpoints) {
        console.log("You Win!");
}

function printloser(comppoints) {
        console.log("You Lost :(");
}


function choosewinner(playerchoice, compchoice) {
    if (playerchoice === compchoice)
        {
            console.log("Draw");

        }
        else if (playerchoice == "Scissors" && compchoice == "Paper")
        {
            printwinner()
            playerpoints+=1;
        }
        else if (playerchoice == "Rock" && compchoice == "Scissors")
        {
            printwinner()
            playerpoints+=1;
        }
        else if (playerchoice == "Paper" && compchoice == "Rock")
        {
            printwinner()
            playerpoints+=1;
        }
        else if (playerchoice == "Paper" && compchoice == "Scissors")
        {
            printloser()
            comppoints+=1;
        }
        else if (playerchoice == "Scissors" && compchoice == "Rock")
        {
            printloser()
            comppoints+=1;
        }
        else if (playerchoice == "Rock" && compchoice == "Paper")
        {
            printloser()
            comppoints+=1;
        }
    }
    

// Add points to playerpoints when player wins 



// Add points to comppoints when computer wins