function addition(num1, num2) {
    let result = num1 + num2;
    return result
}

function subtraction(num1, num2) {
    let result = num1 - num2;
    return result
}
function multiplication(num1, num2) {
    let result = num1 * num2;
    return result
}
function division(num1, num2) {
    let result;
    if (num2 === 0) {
        result = 'Ділення на нуль неможливе!'
    } else {
        result = num1 / num2;
    }
    return result
}


let firstNum;
let secondNum;
let symbolOperations;

do {
    firstNum = +prompt('Введіть перше число:');
    if (isNaN(firstNum)) {
        alert('Введіть правильне число !')
    }
} while (isNaN(firstNum));

do {
    secondNum = +prompt('Введіть друге число:');
    if (isNaN(secondNum)) {
        alert('Введіть правильне число !')
    }
} while (isNaN(secondNum));

do {
    symbolOperations = prompt('Введіть символ арифметичної операції ( + , -, *, / ):')
    if (symbolOperations !== '+' && symbolOperations !== '-' && symbolOperations !== '/' && symbolOperations !== '*') {
        alert('Введіть правильний символ операції ( + , -, *, / )');
    }
}
while (symbolOperations !== '+' && symbolOperations !== '-' && symbolOperations !== '/' && symbolOperations !== '*');


switch (symbolOperations) {
    case '+':
        alert(`Результат: ${addition(firstNum, secondNum)}`);
        console.log(`Результат: ${addition(firstNum, secondNum)}`);
        break;
    case '-':
        alert(`Результат: ${subtraction(firstNum, secondNum)}`);
        console.log(`Результат: ${subtraction(firstNum, secondNum)}`);
        break;
    case '*':
        alert(`Результат: ${multiplication(firstNum, secondNum)}`);
        console.log(`Результат: ${multiplication(firstNum, secondNum)}`);
        break;
    case '/':
        alert(`Результат: ${division(firstNum, secondNum)}`);
        console.log(`Результат: ${division(firstNum, secondNum)}`);
        break;

    default: alert('Що ти там ввів???')
        break;
}