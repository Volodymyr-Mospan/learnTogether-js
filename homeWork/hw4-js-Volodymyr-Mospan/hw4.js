// 1. Ініціалізація числових змінних:

// - Створіть змінну integerNumber та надайте їй значення будь-якого цілого числа.
// - Створіть змінну floatingPointNumber та надайте їй значення будь-якого числа з плаваючим розділювачем.
// - Виведіть обидві змінні в консоль.
// - Перевірте тип обох змінних за допомогою typeof та виведіть результат

const integerNumber = 100;
const floatingPointNumber = 20.5;
console.log("Ціле число:", integerNumber);
console.log("тип даних:", typeof integerNumber);

console.log("Число з плаваючим розділювачем:", floatingPointNumber);
console.log("тип даних:", typeof floatingPointNumber);

// ------------------------------------------

// 2. Робота з великими числами:

// - Оголосіть та ініціалізуйте константу largeNumber значенням одного мільйона (використовуючи розділювачі _ для кращої читабельності).
// - Виведіть це значення в консоль.
// - Створіть змінну типу BigInt зі значенням більшим за Number.MAX_SAFE_INTEGER та виконайте з нею просту математичну операцію

const largeNumber = 1_000_000;
console.log("Один мільйон:", largeNumber);

const maxSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
const bigIntNumber = maxSafeInteger + 1n;
console.log("Значенням більшим за Number.MAX_SAFE_INTEGER:", bigIntNumber);

// ------------------------------------------

// 3. Експоненціальний запис чисел:

// - Створіть змінну scientificNotation та присвойте їй значення 1.23e5.
// - Виведіть результат в консоль, в коментарі поясніть, що означає запис експоненціального формату.
// - Створіть змінну з від'ємною експонентою (наприклад, 1.23e-5) та поясніть різницю

const scientificNotation = 1.23e5; // 1.23 * 10^5 = 123000
console.log(scientificNotation);
const negativeScientificNotation = 1.23e-5; // 1.23 / 10^5 = 0.0000123
console.log(negativeScientificNotation);

// ------------------------------------------

// 4. Використання об'єкту Math для генерації випадкових чисел:

// - Створіть змінну randomNumber і присвойте їй випадкове число від 4 до 7, використовуючи Math.random()
// - Виведіть це число в консоль.

let randomNumber = Math.random() * (7 - 4) + 4;
console.log(randomNumber);

// ------------------------------------------

// 5. Особливості чисел у JavaScript:

// - Створіть дві змінні: firstDecimal та secondDecimal і присвойте їм значення 0.11 та 0.12 відповідно.
// - Створіть третю змінну sum і присвойте їй суму firstDecimal та secondDecimal.
// - Виведіть значення sum в консоль.

const firstDecimal = 0.11;
const secondDecimal = 0.12;

const sumDecimal = firstDecimal + secondDecimal;
console.log("Сума десяткових чисел:", sumDecimal);
console.log("Округлене значення:", Number(sumDecimal.toFixed(3)));
