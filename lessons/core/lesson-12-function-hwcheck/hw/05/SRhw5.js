// 1. Ініціалізація числових змінних:
let integerNumber = 555;
let  floatingPointNumber = 555.555;
console.log(integerNumber);
console.log(floatingPointNumber);
console.log(typeof integerNumber);
console.log(typeof floatingPointNumber);



// 2. Робота з великими числами:
const largeNumber = 1_000_000;
console.log(largeNumber);
let Number_MAX_SAFE_INTEGER = 5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555550n;
console.log(Number_MAX_SAFE_INTEGER + BigInt (5));



// 3. Експоненціальний запис чисел:
let scientificNotation = 1.23e5 // В даному випадку цей експоненціальний запис представляє собою число 1.23 що множиться на 10 (яке піднесене до 5 степеня)
console.log(scientificNotation);
let minusScientificNotation = 1.23e-5 // Різниця в тому що це цисло ділиться а не множиться на 10 (яке піднесене до 5 степеня)
console.log(minusScientificNotation);



// 4. Використання об'єкту Math для генерації випадкових чисел:
const numMin = 4;
const numMax = 7;
let randomNumber = (Math.floor(Math.random() * (numMax - numMin + 1)) + numMin);
console.log(randomNumber);



// 5. Особливості чисел у JavaScript:
let firstDecimal = 0.11
let secondDecimal = 0.12
let sum = firstDecimal + secondDecimal;
console.log(sum);
