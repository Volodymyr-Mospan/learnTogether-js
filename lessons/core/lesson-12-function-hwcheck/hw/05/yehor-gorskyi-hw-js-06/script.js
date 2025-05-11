console.log("Ініціалізація числових змінних");
let integerNumber = 5;
let floatingPointNumber = 2.75;
console.log(typeof integerNumber);
console.log(integerNumber);
console.log(typeof floatingPointNumber);
console.log(floatingPointNumber);
console.log("\n");

console.log("Робота з великими числами");
const largeNumber = 1_000_000;
console.log(largeNumber);
// const bigInt = BigInt(9007199254740992);
const bigInt = BigInt("9007199254740992");
console.log(bigInt);
const bigInt2 = bigInt + BigInt(1);
console.log(bigInt2);

console.log("\n");
console.log("Експоненціальний запис чисел");
console.log(
  "Для представлення дуже великих або дуже малих чисел у зручному вигляді з використанням степеня десяти"
);
let scientificNotation1 = 1.23e5;
console.log(scientificNotation1);
let scientificNotation2 = 1.23e-5;
console.log(scientificNotation2);

console.log("\n");
console.log("Генерація випадкових чисел");
const minNumber = 4;
const maxNumber = 7;
const randomNum = Math.random() * (maxNumber + 1 - minNumber) + minNumber;
console.log(Math.trunc(randomNum));
console.log("\n");

console.log("Особливості чисел у JavaScript");
const firstDecimal = 0.11;
const secondDecimal = 0.12;
const sum = firstDecimal + secondDecimal;
console.log(sum);
