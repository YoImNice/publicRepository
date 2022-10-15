import {cardArrayLvl3} from './cards.js';
import {cardArrayLvl2} from './cards.js';
import {cardArrayLvl1} from './cards.js';

// Example of the arrow function

// const sayMessage = (what, who) => {
//     return `${what}, ${who}!`;
//   };
//   sayMessage('Hello', 'World'); // => 'Hello, World!'

cardArrayLvl3.sort(() => 0.5 - Math.random())

const WinMessage = `
<span style="--i:1">Y</span>
<span style="--i:2">o</span>
<span style="--i:3">u</span>
<span style="margin:5px"></span>
<span style="--i:4">W</span>
<span style="--i:5">o</span>
<span style="--i:6">n</span>
<span style="--i:7">!</span>`

const GridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const messageDisplay = document.querySelector('#message')

const PopupContainer = document.querySelector('.popup')
const ScoreContainer = document.querySelector('.score-panel')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i=0;i<cardArrayLvl3.length;i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipCard)
        GridDisplay.append(card)
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId && cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        messageDisplay.innerHTML = `<span class="wrong-action"> You click the same image! </span>`
    }
    if (cardsChosen[0] == cardsChosen[1] && optionOneId != optionTwoId) {
        messageDisplay.innerHTML = `<span class="match-action">You found a match!</span>`
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        messageDisplay.innerHTML = `<span class="wrong-action"> Sorry, its wrong </span>`
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArrayLvl3.length/2) {
        ScoreContainer.classList.add("win-message-style")
        ScoreContainer.innerHTML = WinMessage;
        setTimeout(function(){
            location.reload(true);
         }, 5000);
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    PopupContainer.classList.remove('popup')
    PopupContainer.classList.add('popup-remove')
    cardsChosen.push(cardArrayLvl3[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArrayLvl3[cardId].img)
     if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
     }
}

createBoard()