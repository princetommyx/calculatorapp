let display = document.getElementById('display'); // Get the display element from the HTML
let currentOperand = ''; // Store the current number being entered
let previousOperand = ''; // Store the previous number entered
let operation = null; // Store the current operation (+, -, *, /)

// Function to append a number to the current operand
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return; // Prevent multiple decimals
    currentOperand = currentOperand.toString() + number.toString(); // Append the number
    updateDisplay(); // Update the display with the current operand
}

// Function to choose an operation
function chooseOperation(op) {
    if (currentOperand === '') return; // Do nothing if no current operand
    if (previousOperand !== '') {
        calculate(); // Calculate if there is a previous operand
    }
    operation = op; // Set the current operation
    previousOperand = currentOperand; // Move current operand to previous
    currentOperand = ''; // Clear the current operand
}

// Function to perform the calculation
function calculate() {
    let computation;
    const prev = parseFloat(previousOperand); // Convert previous operand to a number
    const current = parseFloat(currentOperand); // Convert current operand to a number
    if (isNaN(prev) || isNaN(current)) return; // Do nothing if operands are not numbers
    switch (operation) {
        case '+':
            computation = prev + current; // Addition
            break;
        case '-':
            computation = prev - current; // Subtraction
            break;
        case '*':
            computation = prev * current; // Multiplication
            break;
        case '/':
            computation = prev / current; // Division
            break;
        default:
            return;
    }
    currentOperand = computation; // Set the result as the current operand
    operation = null; // Clear the operation
    previousOperand = ''; // Clear the previous operand
    updateDisplay(); // Update the display with the result
}

// Function to clear the display and reset all values
function clearDisplay() {
    currentOperand = ''; // Clear current operand
    previousOperand = ''; // Clear previous operand
    operation = null; // Clear operation
    updateDisplay(); // Update the display
}

// Function to update the display with the current operand
function updateDisplay() {
    display.value = currentOperand; // Set the display value to the current operand
}
