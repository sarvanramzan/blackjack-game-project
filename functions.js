// 4. functions -  block of code designed to perform a particular task when invoked
function startGame() {
    // invoke the function to render the game
    renderGame();
}

function renderGame() {
    // html dom
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    // conditional statements to check if the "sum" meets the game rules
    if (sum <= 20) {
        // html dom
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        // html dom
        message = "You have got blackjack!";
    } else {
        // html dom
        message = "You are out of the game!";
    }
    // html dom
    messageEl.textContent = message;
}

function newCard() {
    // local variable
    let card = 6;
    // reasign the sum variable
    sum += card;
    // render the card on the html dom - push card to an array
    cards.push(card);
    // invoke the function
    renderGame();
    console.log(cards)
}