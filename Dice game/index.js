// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const resetBtnL = document.getElementById("resetBtnL")
const riskBtn = document.getElementById("riskBtnP1")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function showResetButtonL() {
    rollBtn.style.display = "none"
    resetBtnL.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButtonL()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    
    player1Turn = !player1Turn
})

// DOUBLE OR NOTHING

riskBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const riskChance = Math.floor(Math.random() * 2)
    const doubleNumber = randomNumber * 2
    
    if (player1Turn === true & riskChance === 0) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    } else if (player1Turn === true & riskChance === 1){
        player1Score += doubleNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = doubleNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "2X for Player 1 🍀, Player 2 Turn"
    } else if (player1Turn === false & riskChance === 0){
        message.textContent = "Player 1 Won 🥳"
        showResetButtonL()
    } else {
        player2Score += doubleNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = doubleNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "2X for Player 2 ✨, Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButtonL()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    
    player1Turn = !player1Turn
    
    riskBtn.style.display = ("none")
})


// RESET
 
 resetBtn.addEventListener("click", function(){
    resetP1Turn()
})

resetBtnL.addEventListener("click", function(){
    resetP2Turn()
})

function resetP1Turn() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    riskBtn.style.display = ("block")
}

function resetP2Turn() {
    player1Score = 0
    player2Score = 0
    player1Turn = false
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 2 Turn"
    resetBtnL.style.display = "none"
    rollBtn.style.display = "block"
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    riskBtn.style.display = ("block")
}
