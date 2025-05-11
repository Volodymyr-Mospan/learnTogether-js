// 1.
let integerNumber = 10;
let floatingPointNumber = 5.5;
console.log(integerNumber, floatingPointNumber);
console.log(typeof integerNumber, typeof floatingPointNumber);

// 2.
const largeNumber = 1_000_000;
console.log(largeNumber);
let maxNumber = Number.MAX_SAFE_INTEGER; /*9007199254740991 */
let bigNumber =BigInt(String(maxNumber) + 45);
console.log(bigNumber, bigNumber * BigInt('10'));

// 3.
let scientificNotation = 1.23e5; 
console.log(
  scientificNotation +
    '\nЦе результат виведення в консоль змінної зі значенням 1.23e5,\nщо означає 1,23 * 100_000 '
);
let negativScientificNotation = 1.23e-5;
console.log(
  negativScientificNotation +
    '\nЦе результат виведення в консоль змінної зі значенням 1.23e-5,\nщо означає 1,23 / 100_000 '
);

// 4.
let randomNumber = Math.random();
console.log(randomNumber);

// 5.
let firstDecimal = 0.11;
let secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;
console.log(`${firstDecimal} + ${secondDecimal} = ${sum} 🤣`);



