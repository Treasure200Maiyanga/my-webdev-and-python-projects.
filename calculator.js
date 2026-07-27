let displayValue = "";

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue === "") return;
    const lastChar = displayValue.slice(-1);
    if ("+-*/".includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + op;
    } else {
        displayValue += op;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = "Error";
    }
    updateDisplay();
}