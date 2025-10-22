let chances = 100;
const targetNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("chances").innerHTML = `Chances left ${chances}`;

function checkInput() {
    const inputElement = document.getElementById("inputNum");
    const outputElement = document.getElementById("output");
    const checkNumber = document.getElementById("checkNumber");
    const guess = parseInt(inputElement.value);
    
   if (isNaN(guess) || guess <= 0 || guess >= 100) {
        outputElement.textContent = "Please enter a valid number from 1-100";
        return;
   }

   chances--;
   document.getElementById("chances").textContent = `Chances left: ${chances}`;

if(chances === 0) {
    window.alert("Game over!!!");
    inputElement.disabled = true;
    checkNumber.disabled = true;
}

    if (guess === targetNumber) {
        outputElement.textContent = `You guessed the correct number!!!`;
        inputElement.disabled = true;
        checkNumber.disabled = true;
    } else if (chances === 0) {
        inputElement.disabled = true;
    } else if (guess < targetNumber || guess < 50) {
        outputElement.textContent = `Your guess is too low.`;
    } else if (guess > targetNumber || guess > 50) {
        outputElement.textContent = `Your guess is too high.`;
    } else {
        outputElement.textContent = `Please enter a number from 1-100`;
    }
}
