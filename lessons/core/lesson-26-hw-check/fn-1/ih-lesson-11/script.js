//ЗАВДАННЯ: ФУНКЦІЯ-КАЛЬКУЛЯТОР
//МОЖЛИВИЙ АЛГОРИТМ ДІЙ
/*Створить окремі функції для арифметичних операцій: Вам потрібно створити чотири функції для //додавання, віднімання, множення та ділення. Кожна функція приймає два числа як параметри та //повертає результат відповідної операції з ними.

Організуйте ввод даних: Ваш калькулятор повинен запитувати у користувача два числа та символ //арифметичної операції, використовуючи prompt(для того, щоб отримати з promt саме числа, //використовуйте унарний оператор +).

Обробка операцій: В залежності від символу оператора, який ввів користувач, ваш калькулятор //повинен викликати відповідну функцію для виконання обраної операції.

Обробка ділення на нуль: запрограмуйте перевірку яка виключає виконання ділення на 0 (у випадку коли символ оперції є ділення).

Виведення результату: Результат обчислення повинен виводитися в консоль.

Додатково: Спробуйте додати обробку ситуації, коли користувач вводить невідомий оператор.*/

//Приклад роботи програми:
//Користувач вводить перше число: 5.
//Користувач вводить друге число: 3.
//Користувач вводить операцію: *.
//Програма виводить: Результат: 15.console.log("Hello");

function sum (a,b){   
    return a+b;
};
function subtract (a,b){
    return a-b;
};
function multiply (a,b){
    return a*b
};
function divide (a,b){
    return b === 0 ? "You don`t now that you can`t dived by zero": a / b;
};
let a = +prompt("first number:");
let operator = prompt("operator:");
let b = +prompt("second number:");

let result;
 switch (operator){
    case `+`:
        result = sum (a, b);
        break;
     case `-`:
        result = subtract (a, b);
        break;
     case `*`:
        result = multiply (a, b);
        break;
     case `/`:
        result = divide (a, b);
        break; 
    default:
        result = "You don`t now operator";               
 };
  console.log (`Hello! ${result} `);

  /*function calculateCount (a, operator, b){
    if (isNaN(a) || isNaN(b)){
        return  "You don`t now numbers"
    }
    let result;
    switch(operator) {
         case `+`:
        result = a+b;
        break;
     case `-`:
        result = a-b;
        break;
     case `*`:
        result = a*b;
        break;
     case `/`:
        result = b === 0 ? "You don`t now that you can`t dived by zero": a / b ;
        break; 
    default:
       return "You don`t now operator"               
 };
 return result;}

let a = +prompt("first number:");
let operator = prompt("operator:");
let b = +prompt("second number:");

console.log (`Hello! ${calculateCount (a, operator, b)}`);*/   



