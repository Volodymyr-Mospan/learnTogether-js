// 1. Ініціалізація числових змінних:
// - Створіть змінну integerNumber та надайте їй значення будь-якого цілого числа
// - Створіть змінну floatingPointNumber та надайте їй значення будь-якого числа з плаваючим розділювачем
// - Виведіть обидві змінні в консоль
// - Перевірте тип обох змінних за допомогою typeof та виведіть результат

let integerNumber = (7);
console.log(integerNumber); // 7
console.log(typeof integerNumber); // number

let floatingPointNumber = (2.3);
console.log(floatingPointNumber); // 2.3
console.log(typeof floatingPointNumber); // number

// 2. Робота з великими числами:
// - Оголосіть та ініціалізуйте константу largeNumber значенням одного мільйона (використовуючи розділювачі _ для кращої читабельності)
// - Виведіть це значення в консоль
// - Створіть змінну типу BigInt зі значенням більшим за Number.MAX_SAFE_INTEGER та виконайте з нею просту математичну операцію

const largeNumber = (1_000_000)
console.log(largeNumber); // 1000000

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

let velykeChyslo = 91081992547709777n;
console.log(velykeChyslo);
console.log(BigInt(integerNumber) + velykeChyslo);

// 3. Експоненціальний запис чисел:
// - Створіть змінну scientificNotation та присвойте їй значення 1.23e5
// - Виведіть результат в консоль, в коментарі поясніть, що означає запис експоненціального формату
// - Створіть змінну з від'ємною експонентою (наприклад, 1.23e-5) та поясніть різницю

let scientificNotation = (1.23e5);
console.log(scientificNotation); // даний запис експоненціального формату показує, що число 1.23 помножили 5 разів на 10. 

let scientificNotation2 = (1.23e-5);
console.log(scientificNotation2); // даний запис експоненціального формату показує, що число 1.23 поділили 5 разів на 10.


// 4. Використання об'єкту Math для генерації випадкових чисел:
// - Створіть змінну randomNumber і присвойте їй випадкове число від 4 до 7, використовуючи Math.random()
// - Виведіть це число в консоль

// const randomNumber = Math.random
const min = 4
const max = 7
// console.log(Math.floor(randomNumber() * (max - min + 1)) + min );
// const randomNumber = ;

console.log(Math.floor(Math.random() * (max - min + 1) + min ));



// 5. Особливості чисел у JavaScript:
// - Створіть дві змінні: firstDecimal та secondDecimal і присвойте їм значення 0.11 та 0.12 відповідно
// - Створіть третю змінну sum і присвойте їй суму firstDecimal та secondDecimal
// - Виведіть значення sum в консоль

const firstDecimal = 0.11;
const secondDecimal = 0.12;
const sum = firstDecimal + secondDecimal
console.log(sum.toFixed(2));
