
let isAlive = false
let hasWon = false

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

let message = ""
let cards = []
let sum = 0

let player = {
    name: "Jhegg",
    chips: 200
}

playerEl.textContent = player.name + ": $"+player.chips

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if ( randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if ( sum === 21){
        message = "You won!"
        hasWon = true
    }else if ( sum < 21){
        message = "Draw another card?"
        isAlive = true
    }else{
        message = "You lost!"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i]+ " + "
    }
    sumEl.textContent = "Sum: " +sum
}

function newCard(){
    if ( isAlive === true && hasWon === false){
        let card = getRandomNumber()
        cards.push(card)
        sum += card
        renderGame()
    }
}