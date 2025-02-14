// 1.JS Module API
import {renderGame, getRandomCard, newCard} from "./functions.js";

// 2. variables - used to store data values for later use (Global Scope)
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = 0;
let startGameBtn = document.getElementById("startgame-btn");
let newCardBtn = document.getElementById("newcard-btn");

// 3. Event Listener - is a procedure or method executed when any event occurs like a "click event"
startGameBtn.addEventListener("click", function() {
    // reassign the sum variable
    sum += firstCard + secondCard;
    // invoke the function to output the message and card values
    renderGame();
})

newCardBtn.addEventListener("click", function() {
    newCard();
})



// 6. Best Practises
// Refactor to Event Listener
// Refactor to function parameters for code reusability
// Refactor to JavaScript modules (This makes it easier to maintain a code-base.)
// If possible, use const. If not, use let.
