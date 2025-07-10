function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Помилка: ділення на нуль неможливе!';
    }
    return a / b;
}

function calculator() {
    let num1 = +prompt("Введіть перше число:");
    let num2 = +prompt("Введіть друге число:");
    let operator = prompt("Введіть операцію (+, -, *, /):");

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Помилка: невідома операція!";
    }
    console.log(result);
    

   

}

calculator();
