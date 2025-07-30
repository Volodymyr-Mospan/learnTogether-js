/*1. Ініціалізація числових змінних:
 Створіть змінну integerNumber та надайте їй значення будь-якого цілого числа
- Створіть змінну floatingPointNumber та надайте їй значення будь-якого числа з плаваючим розділювачем
- Виведіть обидві змінні в консоль
- Перевірте тип обох змінних за допомогою typeof та виведіть результат*/
let integerNumber = 8;
console.log (integerNumber);
console.log ("тип змінної", typeof integerNumber);
let floatingPointNumber = 4.2;
console.log (floatingPointNumber);
console.log("тип змінної", typeof floatingPointNumber);


/*2. Робота з великими числами:
- Оголосіть та ініціалізуйте константу largeNumber значенням одного мільйона (використовуючи розділювачі _ для кращої читабельності)
- Виведіть це значення в консоль
- Створіть змінну типу BigInt зі значенням більшим за Number.MAX_SAFE_INTEGER та виконайте з нею просту математичну операцію*/
const largeNumber = 1_000_000_000;
console.log(largeNumber);
let hugeNumber =  1_000_000_000_000_000n;
let result = hugeNumber + 1000n;
console.log (result);

/*3. Експоненціальний запис чисел:
- Створіть змінну scientificNotation та присвойте їй значення 1.23e5- Виведіть результат в консоль, в коментарі поясніть, що -означає запис експоненціального формату
- Створіть змінну з від'ємною експонентою (наприклад, 1.23e-5) та поясніть різницю*/
let scientificNotation = 1.23e5;// запис означає 1.23 помножене на 10 у п'ятому ступені
console.log (scientificNotation);
let negativNumber = -1.23e5; //  запис означає 1.23 поділене на 10 у п'ятому ступені
console.log (negativNumber); 


/*4. Використання об'єкту Math для генерації випадкових чисел:
- Створіть змінну randomNumber і присвойте їй випадкове число від 4 до 7, використовуючи Math.random()
- Виведіть це число в консоль*/
let a = 4;
let b = 7;
let randomNumber = Math.floor(Math.random()* (a-b)) + b;
console.log (randomNumber);

/*5. Особливості чисел у JavaScript:
- Створіть дві змінні: firstDecimal та secondDecimal і присвойте їм значення 0.11 та 0.12 відповідно
- Створіть третю змінну sum і присвойте їй суму firstDecimal та secondDecimal
- Виведіть значення sum в консоль*/
let firstDecimal = 0.11;
let secondDecimal = 0.12;
let sum = firstDecimal + secondDecimal;
console.log (sum);
