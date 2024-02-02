//Variables
var affirmationRadio = document.querySelector(".affirmation-container");
var mantraRadio = document.querySelector(".mantra-container");
var resultsContainer = document.querySelector(".results-container");
var receiveMessageBtn = document.getElementById("receive-button");
var clearButton = document.getElementById("clear-button");
var meditationSymbol = document.getElementById("meditate");
var messageText = document.getElementById("message");

//Event Listeners
receiveMessageBtn.addEventListener("click", displayRandomMessage);
clearButton.addEventListener("click", clearMessage);

//Event Handlers and Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function displayRandomMessage() {
  var selectedArray;
  if (
    affirmationRadio.querySelector("input").checked ||
    mantraRadio.querySelector("input").checked
  ) {
    if (affirmationRadio.querySelector("input").checked) {
      selectedArray = affirmations;
    } else {
      selectedArray = mantras;
    }
    var randomIndex = getRandomIndex(selectedArray);
    var randomMessage = selectedArray[randomIndex];
    messageText.textContent = randomMessage;
    clearButton.disabled = false;
    hide(meditationSymbol);
    receiveMessageBtn.disabled = true;
  } else {
    alert("Please select a message type before receiving a message.");
  }
}

function clearMessage() {
  if (messageText.textContent !== "") {
    messageText.textContent = "";
    show(meditationSymbol);
    receiveMessageBtn.disabled = false;
    clearButton.disabled = true;
  } else {
    alert("There is no message to clear.");
  }
}
