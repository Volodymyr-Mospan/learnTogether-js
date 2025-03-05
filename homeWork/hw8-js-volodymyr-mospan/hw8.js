// Оператор If-Else

// Напишіть скрипт, який перевіряє, чи є число записане в початкову змінну парним.
// Програма повинна вивести в консоль "Число парне" або "Число непарне" в залежності
// від числа яке призначено у початкову змінну.

const number = 11;

if (number % 2 === 0) {
  console.log(number, "Число парне");
} else {
  console.log(number, "Число непарне");
}

// -------------------------------------------------------------

// Оператор Switch

// Створіть програму, яка для чисел від 0 до 6 виводить назву дня тижня, відповідну цьому числу (0 - понеділок, 1 - вівторок, і т.д.). Якщо число не входить в цей діапазон, програма повинна вивести "Неправильне число".

const numberOfDay = 2;

switch (numberOfDay) {
  case 0:
    console.log("понеділок");
    break;
  case 1:
    console.log("вівторок");
    break;
  case 2:
    console.log("середа");
    break;
  case 3:
    console.log("четверг");
    break;
  case 4:
    console.log("пятниця");
    break;
  case 5:
    console.log("субота");
    break;
  case 6:
    console.log("неділя");
    break;

  default:
    console.log("Неправильне число");
    break;
}

// -------------------------------------------------------------

// Тернарний оператор(*)

// Напишіть код, який використовує тернарний оператор, для визначення більшого з двох чисел (створіть дві початкові змінні). Програма повинна виводити "Перше число більше", "Друге число більше" або "Числа рівні", в залежності від чисел призначених в початкові змінні. (підказка: тернарний оператор можна додавати як одне зі значень іншого тернарного оператора)

const firstNum = 10;
const secondNum = 20;

console.log(
  firstNum > secondNum
    ? "Перше число більше"
    : secondNum > firstNum
    ? "Друге число більше"
    : "Числа рівні"
);
