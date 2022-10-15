const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const pcScore = document.getElementById("pc-score")
const userScore = document.getElementById("user-score")
const possibleChoices = document.querySelectorAll(".weapon-selector")

let userChoice
let computerChoice
let result
let userCountScore = 0
let pcCountScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = `<img src="images/${userChoice}.png">`
    
    generateComputerChoice()
    
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = `<img src="images/${computerChoice}.png">`
    getResult()
}

function getScore() {
    if (result === 'you win!'){
        userCountScore += 1
    } else if (result === 'you lost!'){
        pcCountScore += 1
    }
    userScore.innerHTML = userCountScore
    pcScore.innerHTML = pcCountScore
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!' 
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    getScore()
    resultDisplay.textContent = result
}
