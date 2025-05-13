1; //Ініціалізація числових змінних
console.log("1 завдання");

let integerNumber = 45;
let floatingPointNumber = 67.4;
console.log(integerNumber, floatingPointNumber);
console.log(typeof integerNumber);
console.log(typeof integerNumber);

2; // Робота з великими числами
console.log("2 завдання");
const largeNumber = 1_000_000_000;
console.log(largeNumber);

const bigNumber = 9007199254740992323n; //typeof - bigint
console.log(typeof bigNumber);

const regNum = 2;
console.log(bigNumber + BigInt(regNum));

const bigNum2 = "9007199254740992323243"; //typeof - string
console.log(BigInt(bigNum2) + BigInt(regNum));

3; // Експоненціальний запис чисел - exponential notation.
//Латинська буква Е означає "ексонента"\ "exponent of degree(показник ступеню)". В десятковій системі Е це ступінь числа 10.
//научний метод запису великого числа
console.log("3 завдання");
const scientificNotation = 1.23e5; //1.23 помножити на 10 5 степені
console.log(scientificNotation);
const notation = 1.23e-5; // 1.23 ділити 5 раз на 10
console.log(notation);

//4.Використання обє'кту Math для генерації випадкових чисел

console.log("4 завдвння");
//a.
let randomNum = Math.random() * (7 - 4 + 1) + 4;
console.log(Math.floor(randomNum));
//b.
let min = 4;
let max = 7;
let randomNum2 = Math.ceil(Math.random() * (max - min) + min);
console.log(randomNum2);
//c.
let min1 = 4;
let max1 = 7;
let randomNum3 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
console.log(randomNum3);

5; //Особливості чисел (десяткові числа)
console.log("5 завдання");
const firstDecimal = 0.11;
const secondDecimal = 0.12;
const expected = 0.23;
//a.
const sum1 = firstDecimal + secondDecimal;
console.log(sum1);
console.log(Number(parseFloat(sum1).toFixed(2)));
console.log(typeof sum1);
//b.
const sum = Number(parseFloat(firstDecimal + secondDecimal).toFixed(2));
console.log(sum);
console.log(typeof sum);
//c.
const sum2 = Number((firstDecimal + secondDecimal).toFixed(2));
console.log(sum2);
console.log(typeof sum2);
//toFixed перетворює на строку тому треба Number()

// const  tolerance = 0.0001;
// if (Math.abs(sum - expected) < tolerance ){
//     console.log(`Результат в межах припустимої похибки`);
// } else {
//     console.log(`Результат за межами припустимої похибки`);
// }
// console.log(typeof NaN);
