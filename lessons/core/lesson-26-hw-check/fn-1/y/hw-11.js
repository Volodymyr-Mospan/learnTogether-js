// ЗАВДАННЯ: ФУНКЦІЯ-КАЛЬКУЛЯТОР---
// МОЖЛИВИЙ АЛГОРИТМ ДІЙ
// Створить окремі функції для арифметичних операцій: Вам потрібно створити чотири функції для додавання, віднімання, множення та ділення. Кожна функція приймає два числа як параметри та повертає результат відповідної операції з ними.

// Організуйте ввод даних: Ваш калькулятор повинен запитувати у користувача два числа та символ арифметичної операції, використовуючи prompt(для того, щоб отримати з promt саме числа, використовуйте унарний оператор +).

// Обробка операцій: В залежності від символу оператора, який ввів користувач, ваш калькулятор повинен викликати відповідну функцію для виконання обраної операції.

// Обробка ділення на нуль: запрограмуйте перевірку яка виключає виконання ділення на 0 (у випадку коли символ оперції є ділення).

// Виведення результату: Результат обчислення повинен виводитися в консоль.

// Додатково: Спробуйте додати обробку ситуації, коли користувач вводить невідомий оператор.

// Приклад роботи програми:
// Користувач вводить перше число: 5.
// Користувач вводить друге число: 3.
// Користувач вводить операцію: *.
// Програма виводить: Результат: 15.

/**
 * Простий калькулятор
 */

/**
 * Додає два ччисла
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} Сума між num1 та num2
 */

function plus(num1, num2) {
    return num1 + num2;
}

/**
 * Віднімає два числа
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} Різниця між num1 та num2
 */

function minus(num1, num2) {
    return num1 - num2;
}

/**
 * Множить перше число на друге
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} Добуток між num1 та num2
 */
function multiplication(num1, num2) {
    return num1 * num2;
}


/**
 * Ділить перше число на друге 
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number || string} Різницю між num1 та num2
 */
function devide(num1, num2) {
    if (num2 === 0) {
        return "Zero Division Error";
    }
    return num1 / num2;
}

/**
 * Приймає число від користувача
 * @param {number} promt 
 * @returns {number} Число
 */

function getNumber(promt) {
    let number = "";
    while (true) {
        number = +prompt(`Введіть ${promt ? promt : ""} число`);
        if (!isNaN(number)) break;
    }
    return number;
}

/**
 * Приймає оператор від користувача
 * @returns {string} Рядок з оператором
 */

function getOperator() {
    let operator = "";
    let operators = ["*", "/", "-", "+"];
    while (true) {
        operator = prompt("Введіть оператор");
        if (operators.includes(operator)) break;
    }
    return operator;
}

/**
 * Приймає два числа, оператор, обчислює результат і виводить в консоль
 * 
 */

function calculator() {
    const actions = {
        "*": multiplication,
        "/": devide,
        "+": plus,
        "-": minus,
    };

    let num1 = getNumber();
    let num2 = getNumber("друге");
    let operator = getOperator();

    let result = actions[operator](num1, num2);
    console.log(`Результат виразу ${num1} ${operator} ${num2} = ${result}`);
}

calculator();
