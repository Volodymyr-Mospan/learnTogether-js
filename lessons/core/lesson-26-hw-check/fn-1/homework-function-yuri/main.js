"use strict ";

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (x === 0 || y === 0 ? "Division by zero is not possible" : x / y);

function calc() {
    let calcInput = {
        x: +prompt("Enter first number:", 0),
        y: +prompt("Enter second number", 0),
        operator: String(prompt("Enter operator: ", "")),
    };
    if (isNaN(calcInput.x) || isNaN(calcInput.y)) {
        return "Invalid input. Please enter valid numbers.";
    }

    //! Чи варто і як зробити перевірку на пустий prompt при введені чисел???

    switch (calcInput.operator) {
        case "+": {
            return `Adding operation: ${calcInput.x} + ${calcInput.y} = ${add(calcInput.x, calcInput.y)}`;
        }
        case "-": {
            return `Subtraction operation: ${calcInput.x} - ${calcInput.y} = ${subtract(calcInput.x, calcInput.y)}`;
        }
        case "*": {
            return `Multiplication operation: ${calcInput.x} * ${calcInput.y} = ${multiply(calcInput.x, calcInput.y)}`;
        }
        case "/": {
            return `Division operation: ${calcInput.x} / ${calcInput.y} = ${divide(calcInput.x, calcInput.y)}`;
        }
        default: {
            return calcInput.operator === "" ? "You have not entered an operator" : "Enter true operator!";
        }
    }
}

const res = calc();
console.log(res);
