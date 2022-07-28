function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return arr[randomIndex];
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function playRound(playerSelection, computerSelection) {
    let isDraw = false;
    let isWon = false;
    playerSelection = playerSelection.toLowerCase();
    
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    // if two of us picked same thing then Tie

    if (playerSelection !== computerSelection) {

        switch (playerSelection) {

            // Rock
            case "rock":
                if (computerSelection === "scissors")
                    isWon = true;

                break;
            
            // Paper
            case "paper":
                if (computerSelection === "rock")
                    isWon = true;

                break;

            // Scissors
            case "scissors":
                if (computerSelection === "paper")
                    isWon = true;

                break;
        }
    } else {
        isDraw = true;
    }

    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    let message;

    if (isDraw)
        return "It's Draw!";

    if (isWon) {
        message = `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`
    }

    return message;
}