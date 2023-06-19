const Items = Object.freeze({
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors",
});

const Results = Object.freeze({
    Player: "player",
    Computer: "computer",
    Draw: "draw",
})

const MAX_SCORE = 5;
let playerScore = 0, compScore = 0;
let round = 1;


let container = document.querySelector(".container");
let scoreBoard = container.querySelector(".score");
let items = container.querySelectorAll(".items");
let log = container.querySelector(".log");
let roundCounter = log.querySelector("#roundCounter");
let message = log.querySelector(".message");


for (let item of items) {
    item.addEventListener("click", function (event) {
        let selectedItemByPlayer = event.target.textContent;
        playRound(
            selectedItemByPlayer,
            getComputerChoice(),
        );

        updateScoreBoard(scoreBoard, playerScore, compScore);
        announceWinner(playerScore, compScore);
    });
}

function playRound(playerSelection, computerSelection) {
    const result = decideWinner(playerSelection, computerSelection);
    roundCounter.textContent = `#${round}`;

    switch (result) {
        case Results.Player:
            playerScore++;
            message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            break

        case Results.Computer:
            compScore++;
            message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break

        case Results.Draw:
            message.textContent = "It's Draw!";
            break
    }

    round++;
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


function announceWinner(playerScore, compScore) {
    if (playerScore >= MAX_SCORE || compScore >= MAX_SCORE) {
        if (playerScore >= MAX_SCORE)
            alert("You Win!");
        if (compScore >= MAX_SCORE)
            alert("You Lose!");

        clear();
    }
}

function clear() {
    playerScore = 0;
    compScore = 0;

    updateScoreBoard(scoreBoard);
    log.textContent = "";
}

function updateScoreBoard(scoreBoard) {
    scoreBoard.querySelector("#ps").textContent = playerScore;
    scoreBoard.querySelector("#cs").textContent = compScore;
}

function getComputerChoice() {
    let arr = [Items.Rock, Items.Paper, Items.Scissors];
    let randomIndex = Math.floor(Math.random() * 3);
    return arr[randomIndex];
}

function init() {
    updateScoreBoard(scoreBoard);
    roundCounter.textContent = `#${round}`;
}

init()
