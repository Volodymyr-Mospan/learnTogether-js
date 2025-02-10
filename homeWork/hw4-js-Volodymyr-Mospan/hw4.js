// 1. Ініціалізація числових змінних:

// - Створіть змінну integerNumber та надайте їй значення будь-якого цілого числа.
// - Створіть змінну floatingPointNumber та надайте їй значення будь-якого числа з плаваючим розділювачем.
// - Виведіть обидві змінні в консоль.

const integerNumber = 100;
const floatingPointNumber = 20.5;
console.log("Ціле число - ", integerNumber);
console.log("Число з плаваючим розділювачем - ", floatingPointNumber);

// ------------------------------------------

// 2. Робота з великими числами:

// - Оголосіть та ініціалізуйте константу largeNumber значенням одного мільйона (використовуючи розділювачі _ для кращої читабельності).
// - Виведіть це значення в консоль.

const largeNumber = 1_000_000;
console.log(largeNumber);

// ------------------------------------------

// 3. Експоненціальний запис чисел:

// - Створіть змінну scientificNotation та присвойте їй значення 1.23e5.
// - Виведіть результат в консоль, в коментарі поясніть, що означає запис експоненціального формату.

const scientificNotation = 1.23e5; // 1.23 * 10^5
console.log(scientificNotation);

// ------------------------------------------

// 4. Використання об'єкту Math для генерації випадкових чисел:

// - Створіть змінну randomNumber і присвойте їй випадкове число від 0 до 1, використовуючи Math.random().
// - Виведіть це число в консоль.

let randomNumber = Math.random();
console.log(randomNumber);

// ------------------------------------------

// 5. Особливості чисел у JavaScript:

// - Створіть дві змінні: firstDecimal та secondDecimal і присвойте їм значення 0.11 та 0.12 відповідно.
// - Створіть третю змінну sum і присвойте їй суму firstDecimal та secondDecimal.
// - Виведіть значення sum в консоль.

const firstDecimal = 0.11;
const secondDecimal = 0.12;

const sumDecimal = firstDecimal + secondDecimal;
console.log(sumDecimal);
console.log(Number(sumDecimal.toFixed(3)));
