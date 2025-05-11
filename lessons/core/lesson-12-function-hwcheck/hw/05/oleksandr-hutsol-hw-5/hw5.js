// 1. Ініціалізація числових змінних

const integerNumber = 39;
const floatingPointNumber = 25.76;
console.log(integerNumber, floatingPointNumber);
console.log(typeof integerNumber, typeof floatingPointNumber);

//2. Робота з великими числами

const largeNumber = 1_000_000;
console.log(largeNumber);
let largerMaxSaveInt = BigInt(Number.MAX_SAFE_INTEGER + 5);
largerMaxSaveInt = largerMaxSaveInt * 2n;
console.log(largerMaxSaveInt);


// 3. Експоненціальний запис чисел

const scientificNotation = 1.23e5;
console.log(scientificNotation);
// Даний запис еквівалентний наступному: 1.23 * 10 в 5 ступені, тобто 1.23 * 100_000
const lowNumberScientificNotation = 1.23e-5;
console.log(lowNumberScientificNotation);
// Даний запис еквівалентний наступному: 1.23 * 10 в -5 ступені, тобто 1.23 * 0.00001

// 4. Використання об'єкту Math для генерації випадкових чисел

const maxValue = 7;
const minValue = 4;
const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
console.log(randomNumber);

// 5. Особливості чисел у JavaScript

const firstDecimal = 0.11;
const secondDecimal = 0.12;
const sum = firstDecimal + secondDecimal;
console.log(sum);