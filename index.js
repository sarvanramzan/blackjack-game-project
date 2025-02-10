// 1. Database (Firebase) - Installation & Setup in Javascript
  // a. Initialize Firebase in app - import "initializeApp(), getDatabase(), ref()"
  // b. create a Firebase App object
  // c. Fetch database items with "onValue()"




// 2. variables - used to store data values for later use (Global Scope)
let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]; // array
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let startGameBtn = document.getElementById("startgame-btn");
let newCardBtn = document.getElementById("newcard-btn");
let message = ""; // empty string

// Special Variable Types:
  // array - data structure that stores multiple values in a single  variable.
  // object - are variables that contain multiple data values as "key-value" pairs.
  // boolean


//2b. localStorage API - store key-value pairs directly in a user's browser




// 3. Event Listener - is a procedure or method executed when any event occurs like a "click event"
startGameBtn.addEventListener("click", function() {
  // invoke function
  startGame();
})

newCardBtn.addEventListener("click", function() {
  // invoke function
  newCard();
})



// log to the console to test code
console.log()
// local variables
// html dom
// reassign variable
// invoke function
// return statement
// conditional statement - execute specific blocks of code based on conditions
// for loops - execute a block of code as long as a specified condition is true.
// localStorage API - store key-value pairs directly in a user's browser




// 5. log to the console to test code
console.log(newCardBtn)


// 6. Best Practises
// Refactor to Event Listener
// Refactor to function parameters for code reusability
// Refactor to JavaScript modules (This makes it easier to maintain a code-base.)
// If possible, use const. If not, use let.
