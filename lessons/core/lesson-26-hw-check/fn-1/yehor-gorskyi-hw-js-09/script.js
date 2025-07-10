function calculator() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let operator = prompt("Введіть операцію (+, -, *, /):");
    let num2 = parseFloat(prompt("Введіть друге число:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Введіть коректні числа!");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Поділити на нуль неможливо");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Некоректний оператор");
            return;
    }

    console.log(`Результат: ${num1} ${operator} ${num2} = ${result}`);
}


calculator();
