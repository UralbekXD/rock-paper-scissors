function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return arr[randomIndex];
}