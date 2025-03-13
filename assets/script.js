// Select the display input field
let display = document.getElementById("display");

// Function to append numbers to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator (+, -, *, /, %)
function appendOperator(operator) {
    let lastChar = display.value.slice(-1);

    // Prevent multiple consecutive operators
    if ("+-*/%".includes(lastChar)) {
      return;


    } display.value += operator;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate and display the result
function result() {
    try {
        display.value = Function(`return ${display.value}`)();
    } catch {
        alert("Invalid Input");
        clearDisplay();
    }
}
