function makeChoice(userChoice) {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(userChoice, computerChoice, result) {
    var resultElement = document.querySelector(".result");
    resultElement.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
