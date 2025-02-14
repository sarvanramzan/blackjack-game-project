function renderGame() {
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
    } else if (sum === 21) {
        // reassign the message variable
        message = "You have got blackjack!";
    } else {
        // reassign the message variable
        message = "You are out of the game!";
    }
    // html dom
    messageEl.textContent = message;
}

function newCard() {
    // local variable
    let card = 8;
    // reassign the sum variable
    sum += card
    // push the new card to the cards array
    cards.push(card);
    // invoke the function to output the values to the DOM
    renderGame();
}