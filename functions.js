// 2. variables - used to store data values for later use (Global Scope)
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let message = "";
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

// 4. functions -  block of code designed to perform a particular task when invoked
export function getRandomCard() {
    let randomNumbers = Math.floor(Math.random() * 13 + 1);
    if (randomNumbers > 10) {
        return 10
    } else if (randomNumbers === 1) {
        return 11
    } else {
        return randomNumbers;
    }
}  

export function renderGame() {
    // html dom
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + sum;
    // use a for loop to loop through the array to output the values on the DOM
    for(let i = 0; i < cards.length; i++) {
        // html dom
        cardsEl.textContent += cards[i] + " ";
    }
    // use conditional statements to output the message
    if(sum <= 20) {
        // reassign the message variable
        message = "Do you want to draw a new card ?";
        isAlive = true;
    } else if (sum === 21) {
        // reassign the message variable
        message = "You have got blackjack!";
        hasBlackJack = true;
    } else {
        // reassign the message variable
        message = "You are out of the game!";
        isAlive = false;
    }
    // html dom
    messageEl.textContent = message;
}

export function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        // local variable
        let card = getRandomCard();
        // reassign the sum variable
        sum += card
        // push the new card to the cards array
        cards.push(card);
        // invoke the function to output the values to the DOM
        renderGame();
    }
}


