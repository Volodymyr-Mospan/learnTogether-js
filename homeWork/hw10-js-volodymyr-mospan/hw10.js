// Цикл While

// Напишіть скрипт, який виведе в консоль всі числа кратні 3 в діапазоні від 33 до 23 включно (саме в порядку від 33 до 23)

/**
 * Виводить у консоль усі числа у вказаному діапазоні, які кратні заданому числу.
 * Діапазон може бути як зростаючим, так і спадним, залежно від значень `startOfRange` і `endOfRange`.
 */

/**
 * @constant {number} startOfRange - Початкове значення діапазону.
 * @constant {number} endOfRange - Кінцеве значення діапазону.
 * @constant {number} multiple - Число, на яке перевіряється кратність.
 * @constant {boolean} isStartSmaller - Визначає, чи початкове значення менше за кінцеве.
 */
const startOfRange = 33;
const endOfRange = 23;
const multiple = 3;
const isStartSmaller = startOfRange < endOfRange;

/**
 * Лічильник для ітерації по діапазону.
 * Починається з `startOfRange` і змінюється відповідно до напрямку.
 * @type {number}
 */
let numInRange = startOfRange;

/**
 * Виконує ітерацію в межах діапазону.
 * Якщо `isStartSmaller` є `true`, то лічильник збільшується до `endOfRange`.
 * Якщо `isStartSmaller` є `false`, то лічильник зменшується до `endOfRange`.
 * Виводить у консоль числа, які кратні `multiple`.
 */
while (isStartSmaller ? numInRange <= endOfRange : numInRange >= endOfRange) {
  if (numInRange % multiple === 0) {
    console.log(numInRange);
  }

  // Оновлення лічильника залежно від напрямку руху
  numInRange += isStartSmaller ? 1 : -1;
}

// -------------------------------------------------------------

// Цикл Do/While

// Створіть програму,  яка генерує та виводить в консоль випадкові числа від 1 до 10, поки не згенерується число 8.
// Програма також повинна вести підрахунок кількості ітерацій циклу, потрібних для генерації числа 8,
// та виводити це число після закінчення циклу.

/**
 * Генерує випадкові числа в заданому діапазоні, поки не знайдеться потрібне число.
 * Виводить кожне згенероване число та рахує кількість ітерацій.
 */

/**
 * @constant {number} minNum - Мінімальне можливе випадкове число (включно).
 * @constant {number} maxNum - Максимальне можливе випадкове число (включно).
 * @constant {number} wantedNumber - Число, яке потрібно знайти серед випадкових значень.
 */
const minNum = 1;
const maxNum = 10;
const wantedNumber = 8;

/**
 * @type {number} randomNum - Змінна для збереження поточного випадкового числа.
 * @type {number} counterOfRandomNum - Лічильник спроб генерації числа.
 */
let randomNum;
let counterOfRandomNum = 0;

/**
 * Цикл `do...while` генерує випадкові числа, поки не знайдеться `wantedNumber`.
 *
 * - Використовує `Math.random()` для отримання значень у діапазоні `[minNum, maxNum]`.
 * - Кожне згенероване число виводиться у консоль.
 * - Підраховується кількість ітерацій до знаходження `wantedNumber`.
 */
do {
  counterOfRandomNum += 1;
  randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  console.log(randomNum);
} while (randomNum !== wantedNumber);

console.log(
  `Число ${wantedNumber} знайшлось на ${counterOfRandomNum} ітерації`
);

// -------------------------------------------------------------

// Цикл For

// Напишіть код, який використовує цикл for для піднесення числа 2 до степеня від 2 до 10 включно.
// Результат кожної операції піднесення до степеня повинен бути виведений в консоль у форматі "2 в степені N дорівнює R",
// де N - це поточна степінь, а R - це результат піднесення до степеня.

/**
 * Обчислює та виводить у консоль значення числа, піднесеного до всіх ступенів у заданому діапазоні.
 */

/**
 * @constant {number} originalNumber - Число, яке потрібно підносити до степеня.
 * @constant {number} powerFrom - Початковий показник степеня.
 * @constant {number} powerTo - Кінцевий показник степеня.
 */
const originalNumber = 2;
const powerFrom = 2;
const powerTo = 10;

/**
 * Цикл `for` обчислює степінь числа `originalNumber` від `powerFrom` до `powerTo`.
 *
 * - `i` проходить усі значення від `powerFrom` до `powerTo`.
 * - Використовується оператор `**` для піднесення до степеня.
 * - Результати виводяться у консоль у форматі:
 *   `"originalNumber в степені i дорівнює result"`.
 */
for (let i = powerFrom; i <= powerTo; i++) {
  console.log(
    `${originalNumber} в степені ${i} дорівнює ${originalNumber ** i}`
  );
}
