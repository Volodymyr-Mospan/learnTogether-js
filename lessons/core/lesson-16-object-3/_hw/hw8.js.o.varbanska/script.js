// 1. Оператор If-Else
// Напишіть скрипт, який перевіряє, чи є число записане в початкову змінну парним. Програма повинна вивести в консоль "Число парне" або "Число непарне" в залежності від числа яке призначено у початкову змінну.

let numberForCheck = 54645105545;
if (numberForCheck % 2 == 0) {
  console.log("Число парне");
} else {
  console.log("Число непарне");
}

let indentation = "\n";
console.log(indentation);

// 2. Оператор Switch
// Створіть програму, яка для чисел від 0 до 6  виводить назву дня тижня, відповідну цьому числу (0 - понеділок, 1 - вівторок, і т.д.). Якщо число не входить в цей діапазон, програма повинна вивести "Неправильне число".
let daysOfTheWeek = prompt("Введіть число від 0 до 6");
switch (daysOfTheWeek) {
  case "0":
    alert("Monday");
    break;
  case "1":
    alert("Tuesday");
    break;
  case "2":
    alert("Wednesday");
    break;
  case "3":
    alert("Thursday");
    break;
  case "4":
    alert("Friday");
    break;
  case "5":
    alert("Saturday");
    break;
  case "6":
    alert("Sunday");
    break;
  default:
    alert("Неправильне число");
}

console.log(indentation);

// 3. Тернарний оператор(*)
// Напишіть код, який використовує тернарний оператор, для визначення більшого з двох чисел (створіть дві початкові змінні). Програма повинна виводити "Перше число більше", "Друге число більше" або "Числа рівні", в залежності від чисел призначених в початкові змінні. (підказка: тернарний оператор можна додавати як одне зі значень іншого тернарного оператора)
let firstNumber = 692;
let secondNumber = 374;

let result =
  (firstNumber > secondNumber) ? "Перше число більше" :
    (firstNumber < secondNumber) ? "Друге число більше" :
      "Числа рівні"

console.log(result);
