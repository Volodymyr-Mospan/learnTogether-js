//* ЗАВДАННЯ

/* 
ЗАВДАННЯ: ФУНКЦІЯ-КАЛЬКУЛЯТОР---
МОЖЛИВИЙ АЛГОРИТМ ДІЙ
Створить окремі функції для арифметичних операцій: Вам потрібно створити чотири функції для додавання, віднімання, множення та ділення. Кожна функція приймає два числа як параметри та повертає результат відповідної операції з ними.

Організуйте ввод даних: Ваш калькулятор повинен запитувати у користувача два числа та символ арифметичної операції, використовуючи prompt(для того, щоб отримати з promt саме числа, використовуйте унарний оператор +).

Обробка операцій: В залежності від символу оператора, який ввів користувач, ваш калькулятор повинен викликати відповідну функцію для виконання обраної операції.

Обробка ділення на нуль: запрограмуйте перевірку яка виключає виконання ділення на 0 (у випадку коли символ оперції є ділення).

Виведення результату: Результат обчислення повинен виводитися в консоль.

Додатково: Спробуйте додати обробку ситуації, коли користувач вводить невідомий оператор.

Приклад роботи програми:
Користувач вводить перше число: 5.
Користувач вводить друге число: 3.
Користувач вводить операцію: *.
Програма виводить: Результат: 15.
*/

// ============
let firstNumber, secondNumber, operation;

firstNumber = +prompt('Enter first number');
operation = prompt('Enter operation (+, -, *, /)');
secondNumber = +prompt('Enter second number');


function calculateNumbers(firstNumber, secondNumber, operation) {
  //* Перевірка на введення чисел
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return 'You must enter numbers';
  }

  if (operation === '+') {
    return addNumbers(firstNumber, secondNumber);
  } else if (operation === '-') {
    return subtractNumbers(firstNumber, secondNumber);
  } else if (operation === '*') {
    return multiplyNumbers(firstNumber, secondNumber);
  } else if (operation === '/') {
    return divideNumbers(firstNumber, secondNumber);
  } else {
    return 'Unknown operator';
  }

  function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
  function subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }
  function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }
  function divideNumbers(firstNumber, secondNumber) {
    if (secondNumber === 0 || firstNumber === 0) {
      return "You can't divide by 0";
    } else {
      return firstNumber / secondNumber;
    }
  }
}

let result = calculateNumbers(firstNumber, secondNumber, operation);
console.log(result);
