const Items = Object.freeze({
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors",
});

const Results = Object.freeze({
    Player: "player",
    Computer: "computer",
    Draw: "draw",
})

const ROUNDS = 5;
let userScore = 0, compScore = 0;


function game() {
    let finalMessage = "Result: ";

    for (let i = 1; i <= ROUNDS; i++) {
        playRound(
            getPlayerChoice(),
            getComputerChoice(),
        );
    }

    finalMessage += (userScore > compScore) ?
        "You Won!" : (userScore < compScore) ?
            "You Lose!" : "Draw!";
    
    console.log(`${finalMessage} Score: ${userScore}-${compScore}`);
}


function playRound(playerSelection, computerSelection) {
    /**
     * rock beats scissors
     * scissors beats paper
     * paper beats rock
     * if players picked same thing it's Draw
    **/

    const result = decideWinner(playerSelection, computerSelection);

    switch (result) {
        case Results.Player:
            userScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            break

        case Results.Computer:
            compScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            break

        case Results.Draw:
            console.log("It's Draw!");
            break
    }
}


function decideWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return Results.Draw;
    }

    if ((playerSelection === Items.Rock && computerSelection === Items.Scissors) ||
         (playerSelection === Items.Paper && computerSelection === Items.Rock) ||
          (playerSelection === Items.Scissors && computerSelection === Items.Paper))
    {
        return Results.Player;
    }

    return Results.Computer;
}

function getPlayerChoice() {
    return prompt(
        "Pick one of these: Rock, Paper, Scissors",
        "rock",
    ).toLowerCase();
}

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return arr[randomIndex];
}


function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}


game();