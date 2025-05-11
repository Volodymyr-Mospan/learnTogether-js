//* ЗАВДАННЯ

/* 
1. Ініціалізація числових змінних:
- Створіть змінну integerNumber та надайте їй значення будь-якого цілого числа
- Створіть змінну floatingPointNumber та надайте їй значення будь-якого числа з плаваючим розділювачем
- Виведіть обидві змінні в консоль
- Перевірте тип обох змінних за допомогою typeof та виведіть результат

2. Робота з великими числами:
- Оголосіть та ініціалізуйте константу largeNumber значенням одного мільйона (використовуючи розділювачі _ для кращої читабельності)
- Виведіть це значення в консоль
- Створіть змінну типу BigInt зі значенням більшим за Number.MAX_SAFE_INTEGER та виконайте з нею просту математичну операцію

3. Експоненціальний запис чисел:
- Створіть змінну scientificNotation та присвойте їй значення 1.23e5
- Виведіть результат в консоль, в коментарі поясніть, що означає запис експоненціального формату
- Створіть змінну з від'ємною експонентою (наприклад, 1.23e-5) та поясніть різницю

4. Використання об'єкту Math для генерації випадкових чисел:
- Створіть змінну randomNumber і присвойте їй випадкове число від 4 до 7, використовуючи Math.random()
- Виведіть це число в консоль

5. Особливості чисел у JavaScript:
- Створіть дві змінні: firstDecimal та secondDecimal і присвойте їм значення 0.11 та 0.12 відповідно
- Створіть третю змінну sum і присвойте їй суму firstDecimal та secondDecimal
- Виведіть значення sum в консоль
*/

// ============

//* 1. Ініціалізація числових змінних:

console.log('===='.repeat(10));

let integerNumber = 3; // інціалізація змінної значенням цілого числа
let floatingPointNumber = 3.04; // інціалізація змінної значенням  числа з розділювачем
let resultAddNumbers = `Результат додавання двох змінних: ${
  integerNumber + floatingPointNumber
}.`; // змінна яка отримає результат математичної операції додавання

console.log(integerNumber);
console.log(typeof integerNumber); // дізаємось який тип в значення змінної integerNumber
console.log(floatingPointNumber);
console.log(typeof floatingPointNumber); // дізаємось який тип в значення змінної floatingPointNumber

console.log(resultAddNumbers); // результат математичної операції над двома операндами типу number

console.log('===='.repeat(10));

//* 2. Робота з великими числами:

const LARGE_NUMBER = 1_000_000;
const bigIntNumber = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(LARGE_NUMBER);

console.log(`Максимальне ціле число: "${Number.MAX_SAFE_INTEGER}".`); // значення максимального цілого числа для прикладу
console.log(LARGE_NUMBER);
console.log(bigIntNumber);
console.log(BigInt(LARGE_NUMBER) * bigIntNumber); // виконання простої математичної операції з функцією bigInt()

console.log('===='.repeat(10));

//* 3.Експоненціальний запис чисел:

const scientificNotation = 1.23e5 // змінна яка оголошена числом 1.23 яке 5 разів помножино на саме на себе
const minusScientificNotation = 1.23e-5; // змінна яка оголошена числом 1.23 яке 5 разів поділено на саме на себе

console.log(scientificNotation);
console.log(minusScientificNotation);

console.log('===='.repeat(10));

//* 4.Використання об'єкту Math для генерації випадкових чисел:

let randomNumber = Math.floor(Math.random() * (7 - 4 + 1) + 4);
console.log(randomNumber);

console.log('===='.repeat(10));

//* 5.Особливості чисел у JavaScript:

let firstDecimal = 0.11;
let secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;
console.log(sum); // отримуємо суму виразу

console.log('===='.repeat(10));