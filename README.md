# Documentation for my web calculator.

1) Important notice the required files must be downloaded and put in the same path/folder for it to work for example, the calculator.html, calculator.css, and calcultor.js must be all put in one folder together.

2) This goes for the contact homepage and project file sets all project, contact and homepage files must all be in one folder then it can be run there


Features
Digit input (0–9) and decimal point
Operators: add (+), subtract (−), multiply (×), divide (÷)
Clear (C) — resets the calculator
Backspace (<-) — deletes the last character entered
Equals (=) — evaluates the expression and shows the result
Prevents two operators being entered back-to-back (typing a second operator replaces the first)
How It Works
The calculator keeps a single running string, displayValue, which mirrors exactly what's shown on screen. Every button press either appends to this string or transforms it, then re-renders it into the display input.

Functions (calculator.js)
Function	What it does
updateDisplay()	Writes displayValue into the #display input
appendNumber(num)	Adds a digit or decimal point to displayValue
appendOperator(op)	Adds an operator, or swaps it if the last character was already an operator
clearDisplay()	Resets displayValue to an empty string
deleteLast()	Removes the last character from displayValue
calculateResult()	Evaluates displayValue with eval() and displays the result, or "Error" if the expression is invalid
HTML Structure
#display — a disabled text input showing the current expression/result
.buttons — a 4-column CSS grid containing all calculator buttons
Each button's onclick calls directly into a function from calculator.js
CSS Notes
Layout is centered on the page using flexbox (flex-direction: column) on body
.calc-btn.operator and .calc-btn.equals are styled in the accent pink (#d9a7c7) to visually separate them from number keys
.calc-btn.clear uses the cream accent (#fffcdc)
.calc-btn.zero spans two grid columns to match standard calculator layouts
Hover states use transform: scale() for a subtle interactive feel, consistent with the rest of the site
Known Limitations
Uses eval() to compute results — fine for a personal/demo project, but not recommended for production apps handling untrusted input
No keyboard support (mouse/tap only)
No support for parentheses, percentages, or advanced operations
Dividing by zero returns Infinity rather than a custom error message
