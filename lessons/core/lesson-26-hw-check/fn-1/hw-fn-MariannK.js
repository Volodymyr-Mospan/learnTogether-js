//task


let firstNumber = +prompt('Please enter a first number');
let operatorUser = prompt('Please enter an operant');
let secondNumber = +prompt('Please enter a second number');

function addingNumbers(a, b) {
    console.log('Result:', a + b);
}
function subtractionNumbers(a, b) {
    console.log('Result:', a - b);
}
function multiplicationNumbers(a, b) {
    console.log('Result:', a * b);
}
function divisionNumbers(a, b) {
    console.log('Result:', a / b);
}

if (operatorUser === '+') {
    addingNumbers(firstNumber, secondNumber);
} else if (operatorUser === '-') {
    subtractionNumbers(firstNumber, secondNumber);
} else if (operatorUser === '*') {
    multiplicationNumbers(firstNumber, secondNumber);
} else if (operatorUser === '/') {
    if (secondNumber === 0) {
        console.log('You can not divide by 0');
    } else {
        divisionNumbers(firstNumber, secondNumber);
    }
}else{
    console.log('Please enter a valid operator');
}


// variant 2

// const operators = {
//     div: '/',
//     mul: '*',
//     add: '+',
//     sub: '-'
// }
//  const operations = {
//     [operators.div]: (a, b) => b === 0 ? "You can not divide by 0" : a / b,
//     [operators.mul]: (a, b) => a * b,
//     [operators.add]: (a, b) => a + b,
//     [operators.sub]: (a, b) => a - b
//  }

 
//  function calculate () {
//      let firstNumber = +prompt('Please enter a first number');
//      let operatorUser = prompt('Please enter an operant');
//      let secondNumber = +prompt('Please enter a second number');

//      let operatorKey = Object.keys(operators).find(key => operators[key] === operatorUser);

//      if (!operatorKey) {
//         console.log('Please enter a valid operator');
//         return;
//     }
     
//      let operatorSymbol = operators[operatorKey];
     
//     let result = operations[operatorSymbol](firstNumber, secondNumber);
//     console.log(`Result: ${result}`);
//     }

// calculate();

