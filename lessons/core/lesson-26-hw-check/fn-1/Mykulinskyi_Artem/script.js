
const num1 = +prompt("Введіть число №1:")
const num2 = +prompt("Введіть число №2:")
const symbol = prompt("Введіть операцію (+, -, *, /):")

let result;

function Addition(num1, num2){
    return num1 + num2;
}
function Subtraction(num1, num2){
    return num1 - num2;
}
function Multiplication(num1, num2){
    return num1 * num2;
}
function Division(num1, num2){
    if (num2 === 0) {
        return "Помилка! Ділення на нуль.";
    }
    return num1 / num2;
}

switch (symbol) {
    case "+":
        result = Addition(num1, num2);    
        break;
    case "-":
        result = Subtraction(num1, num2);
        break;
    case "*":
        result = Multiplication(num1, num2);
        break;
    case "/":
        result = Division(num1, num2)
        break;         
    default:
        result = "Помилка введення"    
}

alert(`Результат: ${result}`)
console.log(`Результат: ${result}`);
