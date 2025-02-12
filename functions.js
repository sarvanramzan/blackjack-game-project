
// 4. functions -  block of code designed to perform a particular task when invoked
function startGame() {
    // invoke function to render the game
    renderGame();
}

function renderGame() { 
    // html dom
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: " + sum;
    // create a for loop that renders out all the itmes in the array
    for (let i = 0; i < cards.length; i++) {
        // html dom
        cardsEl.textContent += cards[i] + " ";
    }
    // conditional statement
    if (sum <= 20) {
    // reassign the message variable
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    // reassign the message variable
    message = "You have got BlackJack!";
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
    sum += card;
    // push the card to the array
    cards.push(card);
    // invoke the render game function to output to the DOM
    renderGame();
}
