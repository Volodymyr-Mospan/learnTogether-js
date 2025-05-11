/* 1. Ініціалізація числових змінних:
- Створіть змінну integerNumber та надайте їй значення будь-якого цілого числа
- Створіть змінну floatingPointNumber та надайте їй значення будь-якого числа з плаваючим розділювачем
- Виведіть обидві змінні в консоль
- Перевірте тип обох змінних за допомогою typeof та виведіть результат */

console.log("1. Ініціалізація числових змінних");
let integerNumber = 48;
let floatingPointNumber = 52.8;
console.log(integerNumber);
console.log(floatingPointNumber);
console.log(typeof integerNumber);
console.log(typeof floatingPointNumber);

/* 2. Робота з великими числами:
- Оголосіть та ініціалізуйте константу largeNumber значенням одного мільйона (використовуючи розділювачі _ для кращої читабельності)
- Виведіть це значення в консоль
- Створіть змінну типу BigInt зі значенням більшим за Number.MAX_SAFE_INTEGER та виконайте з нею просту математичну операцію */

console.log("2. Робота з великими числами");
const largeNumber = 1_000_000;
console.dir(largeNumber);
const BigInt = 9999999999999999999999n;
// let newCyfr=5999+BigInt; - не можемо змішувати звичайні числа та числа типу BigInt
let newCyfr = 5990n + BigInt;
console.dir(newCyfr);

/* 3. Експоненціальний запис чисел:
- Створіть змінну scientificNotation та присвойте їй значення 1.23e5
- Виведіть результат в консоль, в коментарі поясніть, що означає запис експоненціального формату
- Створіть змінну з від'ємною експонентою (наприклад, 1.23e-5) та поясніть різницю */

console.log("3. Експоненціальний запис чисел");
let scientificNotation = 1.23e5;
console.log(scientificNotation); // (e+5) - oзначає, що ми мусимо число 1.23*10^5 або просто перенести крапку на 5 знаків праворуч
let neScientificNotation = 57.2e-3; // (e-3) - oзначає, що ми мусимо число 57.2*10^(-3), або просто перенести крапку на 3 знаків ліворуч
console.log(neScientificNotation);

/* 4. Використання об'єкту Math для генерації випадкових чисел:
- Створіть змінну randomNumber і присвойте їй випадкове число від 4 до 7, використовуючи Math.random()
- Виведіть це число в консоль */

console.log("4. Використання об'єкту Math для генерації випадкових чисел");
const max = 7;
const min = 4;
let randomNumber = Math.random() * (max - min + 1) + min;
console.log(randomNumber);
console.log(Math.round(randomNumber));

/* 5. Особливості чисел у JavaScript:
- Створіть дві змінні: firstDecimal та secondDecimal і присвойте їм значення 0.11 та 0.12 відповідно
- Створіть третю змінну sum і присвойте їй суму firstDecimal та secondDecimal
- Виведіть значення sum в консоль */

console.log("5. Особливості чисел у JavaScript");
const firstDecimal = 0.11;
const secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;
console.log(sum);
// console.log(sum.toFixed(2));
let string = `${firstDecimal} + ${secondDecimal} = ${(sum * 100) / 100}`;
console.dir(string);
