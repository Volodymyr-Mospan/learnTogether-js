let integerNumber = 100;
let floatingPointNumber = 42.6;

console.log (integerNumber);
console.log (typeof integerNumber);

console.log (floatingPointNumber);
console.log (typeof floatingPointNumber);

let largeNumber = 1_000_000;

console.log (largeNumber);

let maxNum = BigInt("9007199254740991");
let sumNum = maxNum + 1n;
let difNum = maxNum - 1n;

console.log(maxNum);
console.log(sumNum);
console.log(difNum);

let scientificNotation = 1.23e5;
let scientificNotation2 = 1.23e-5;

console.log(scientificNotation);
console.log(scientificNotation2);

// Експоненціальний запис використовується для зручного відображення надзиван малих або великих числел
// Наприклад "1.23e5" вище наведене число можна розкласти на саме число "1.23" та на скільки десятків воно множиться
// У цьому пракладі "e5" означає що потрібно домножити на "10^5"

let randomNumber = Math.random();
let x = 4;
let y = 7;

console.log(Math.floor(randomNumber*(y-x+1))+x);

let firstDecimal = 0.11;
let secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;

console.log(sum);