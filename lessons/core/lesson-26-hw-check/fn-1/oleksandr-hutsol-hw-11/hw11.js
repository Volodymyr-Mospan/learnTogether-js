/**
 * Function to obtain an user nubmer input
 * @param {string} message 
 * @returns number
 */
function getInputNumber(message) {
    let num = prompt(message);
    if(num === null) {
        alert('You canceled number input');
        return null;
    }

    if(isNaN(num) || num.trim() === '') {
        alert('Incorrect input. Number expected');
        return null;
    }
        num = Number(num);
        console.log(`Entered number is: ${num}`);
        return num;
}

/**
 * Function to obtain an operator from a user
 * @param {string} message 
 * @returns {string} operator
 */
function getOperator(message) {
    const validOperators = ['+', '-', '*', '/'];
    let operator;
    operator = prompt(message);
    if(!validOperators.includes(operator)) {
        alert('Incorrect operator');
        return null;
    }
    return operator;
}

/**
 * Function to calculate the sum of two operands
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The sum of two operands
 */
function addition(a, b) {
    return Number((a + b).toFixed(10));
}

/**
 * Function to calculate the difference between two operands
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The difference between two operands
 */
function substraction(a, b) {
    return Number((a - b).toFixed(10));
}

/**
 * Function to calculate the product of two operands
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The product of two operands
 */
function multiplication(a, b) {
    return Number((a * b).toFixed(10));
}

/**
 * Function to calculate the fraction of two operands
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The fraction of two operands
 */
function division(a, b) {
    if(b !== 0) {
        return Number((a / b).toFixed(10));
    }
    return 'Division by 0 is not permitted';
}

/**
 * Main function
 * @returns {number} Result of mathematical operations (addition, substraction, multiplication, division) for two numbers
 */
function calculator() {
    const firstInputOperand = getInputNumber('Enter the first number');
    if(firstInputOperand === null) {
        console.log('The operation is canceled');
        return;
    }
    
    const secondInputOperand = getInputNumber('Enter the second number');
    if(secondInputOperand === null) {
        console.log('The operation is canceled');
        return;
    }

    const inputOperator = getOperator('Enter one of the following operator: +, -, *, /');
    if(inputOperator === null) {
        console.log('Operation canceled');
        return;
    }

    let result;

    switch (inputOperator) {
        case '+' :
            result = addition(firstInputOperand, secondInputOperand);
            break;
        case '-' :
            result = substraction(firstInputOperand, secondInputOperand);
            break;
        case '*' :
            result = multiplication(firstInputOperand, secondInputOperand);
            break;
        case '/' :
            result = division(firstInputOperand, secondInputOperand);
            break;
        default: result = 'result can\'t be calculated';
            break;
    }

    console.log(`Result is: ${result}`);
    alert(`Result is: ${result}`);
}

calculator();