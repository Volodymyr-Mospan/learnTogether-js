console.log("Домашня робота Тимчука Ярослава по числовим типам даних JavaScript \n");
console.log("\n");

console.log("Завдання 1: Ініціалізація числових змінних \n");

let integerNumber = 12;
let floatingPointNumber = 14.5;

console.log(`Значення змінної integerNumber = ${integerNumber}.`);
console.log(`Значення змінної floatingPointNumber = ${floatingPointNumber}.`);
console.log(`Тип змінної integerNumber = "${typeof integerNumber}".`);
console.log(`Тип змінної floatingPointNumber = "${typeof floatingPointNumber}".`);

console.log("\n");
console.log("Завдання 2: Робота з велии-ии-кими числами \n");
console.log("\n");

let largeNumber = 1_000_000;
console.log(`Значення змінної largeNumber = ${largeNumber}. \n`);

let myBigInt = BigInt((Number.MAX_SAFE_INTEGER + 1).toString());
console.log(`Значення myBigInt становить ${myBigInt}`);
let result = myBigInt + BigInt(10);
console.log(`Значення виразу "myBigInt + BigInt(10)" становить ${result}`);
console.log(
    `Вираз типу "BigInt + number" працювати не буде, бо для роботи з BigInt всі операнди повинні бути типу "BigInt"`
);

console.log("\n");
console.log("Завдання 3: Експоненціальний запис чисел\n");

let scientificNotation = 1.23e5;
console.log(`
    Запис експоненціального формату використовують для скороченого запису великих чисел. 
    Змінній scientificNotation присвоєно значення "1.23e5", що можна прочитати як 1.23 
    помножити на  10**5 степені. При виводі в консоль її значення = ${scientificNotation}.
    `);

let scientificNotationNegative = 1.23e-5;
console.log(`
    Змінній scientificNotationNegative присвоєно значення "1.23e-5". 
    Тут е-5 означає, що число потрібно перемножити на 10**-5 степені.
    При виводі в консоль значення цієї змінної =  ${scientificNotationNegative}.
    `);

console.log("\n");
console.log("Завдання 4: Використання об'єкту Math для генерації випадкових чисел\n");

let min = 4;
let max = 7;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Рандомне число в віапазоні від ${min} до ${max} = ${randomNumber}`);

console.log("\n");
console.log("Завдання 5: Особливості чисел у JavaScrip\n");

let firstDecimal = 0.11;
let secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;
console.log(`
    Сума змінних "firstDecimal = ${firstDecimal}" і  "secondDecimal = ${secondDecimal}" 
    в JavaScript становить ${sum}.
    Це відбувається тому, що числа 0.11 і 0.12 в двійковій системі не мають точного представлення.
    `);
