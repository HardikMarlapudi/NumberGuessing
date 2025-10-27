let chances = 100;
const targetNumber = Math.floor(Math.random() * 100 + 1);
document.getElementById("chances").innerHTML = `Chances left ${chances}`;

function checkInput() {
   const inputElement = document.getElementById("inputNum");
   const checkNumber = document.getElementById("checkNumber");
   const guess = parseInt(inputElement.value);
   const output = document.getElementById("output");

    if (isNaN(guess) || guess <= 0 || guess >= 100) {
        output.innerHTML = `Please enter a number from 1-100`;
        return;
    }

    chances--;
    document.getElementById("chances").innerHTML = `Chances left ${chances}`;

    if (chances === 0) {
        document.getElementById("output").innerHTML = `You lost the game!!!`;
        inputElement.disabled = true;
        checkNumber.disabled = true;
        return;
    }

    if (guess === 0) {
        document.getElementById("output").innerHTML = `Please enter a number from 1-100`;
        return;
    }

    if (guess === targetNumber) {
        document.getElementById("output").innerHTML = `Congrats, you guess the correct number.`;
        inputElement.disabled = true;
        checkNumber.disabled = true;
    } else if (guess < 50) {
        document.getElementById("output").innerHTML = `Your guess is too low`;
        return;
    } else if (guess >= 50) {
        document.getElementById("output").innerHTML = `Your guess is too high`;
        return;
    } else if (guess <= 0 || guess >= 100) {
        document.getElementById("output").innerHTML = `Please enter a number from 1 to 100`;
        return;
    } else {
        document.getElementById("output").innerHTML = `Please enter a valid number`;
        return;
    }
}
