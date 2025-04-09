// змінні та їх оголошення

// = -призначення assign

// camelCase (myFirstName)
// snake_case (my_first_name)
// PascalCase (MyFirstName)

// incorretData
// incorretDataVariadble
// appleVsMicrosoft

// incorretDataVar = 12
// console.log(incorretData)

// var let const

// var test_1 // оголошення змінної 
// var test_1 = 333 // оголошення змінної з ініціалізацією числовим значення (літералом)
// var test_1 = 10
// console.log(test_1);
// console.log(test_1);
// test_1 = 999
// console.log(test_1);

// let test_1 // оголошення змінної
// let test_2 // оголошення змінної
// console.log(test_2);
// test_2 = 999
// console.log(test_2);

// const test_3 = 777 // оголошення змінної з ОБОВ`ЯЗКОВОЮ ініціалізацією ЗНАЧЕННЯ
// const test_4 = "ok" // оголошення змінної з ОБОВ`ЯЗКОВОЮ ініціалізацією ЗНАЧЕННЯ
// const test5 = undefined

// console.log(test_3);
// test_3 = 555 // неможна перевизначити константу
// test_3 = 777 // incorrect
// console.log(test_3);

// типи даних та оператор typeof/(typeof())

// Літерали - це фіксовані значення в коді

// Числові літерали:
// 12 // цілі числа
// 1.4 // дробові числа

// Рядкові літерали:
// "Test" // подвійні лапки
// "23454535" // числа як рядок
// 'milk for cat' // одинарні лапки
// `very big` // зворотні лапки (шаблонні рядки)

// Булеві літерали:
// false // хибність
// true // істина

// Спеціальні літерали:
// null // відсутність значення на отримання якого був запит
// undefined // там де не надане значення


// Примітивні типи:
// 1. number   - числа
// 2. string   - рядки
// 3. boolean  - логічний тип
// 4. null     - спеціальне значення "нічого"
// 5. undefined - неприсвоєне значення
// 6. symbol   - унікальні ідентифікатори
// 7. bigint   - великі цілі числа

// Об'єктний тип:
// 8. object   - об'єкти (включаючи масиви та функції)

// 1. Number (числа)
// const number1 = 42;        // ціле число
// const number2 = 3.14;      // дробове число
// const number3 = -10;       // від'ємне число
// const number4 = 0;         // нуль
// const number5 = 1234567; // велике число

// // 2. String (рядки)
// const string1 = 'Hello';           // одинарні лапки
// const string2 = "World";           // подвійні лапки
// const string3 = `I'm a string`;    // зворотні лапки (бектіки)
// const string4 = '123';             // цифри - набір сиволів
// const string5 = 'JavaScript';      // набір символів

// 3. Boolean (логічний тип)
// const boolean1 = true;             // істина
// const boolean2 = false;            // хибність

// const boolean3 = 10 > 5;          // результат порівняння (true)
// console.log(boolean3);

// const boolean4 = 'Hello' === 'World'; // порівняння рядків (false)
// console.log(boolean4);

// const boolean5 = 3 < 1;        
// console.log(boolean5);

// const boolean6 = !(3 < 1);        // логічне НЕ (true)
// const boolean6 = !(false);        // логічне НЕ (true)
// console.log(boolean6);


// 4. Null
// const nullValue = null;   // явно задане пусте значення
// Приклад отримання null:
// const element = document.querySelector('неіснуючий-елемент'); // поверне null
// console.log(element);
// const bodyEl = document.body
// console.dir(bodyEl);


// 5. Undefined
// let undefinedValue;              // змінна без присвоєного значення

// var test_1 // оголошення змінної без ініціалізації

// console.log(test_1, undefinedValue);

// 6. BigInt (великі цілі числа)
// const bigNumber = 1234567890123456789012345678901234567890n; // додаємо 'n' в кінці
// console.log(bigNumber); // 1234567890123456789012345678901234567890n
// console.log(bigNumber); 
// console.log(12345678901234567890123456789012345n); 
// console.log(12345678901234567890123456789012345); 
// console.log(2**53);
// console.log(9007199254740992);
// console.log(9007199254740992-1);
// console.log(9007199254740992+1);

// 6. Symbol (унікальні ідентифікатори)
// Symbol - це примітивний тип даних, кожне значення якого є унікальним
// Навіть якщо створити два символи з однаковим описом - вони будуть різними

// const symbol1 = Symbol();         // створює новий унікальний символ без опису
// console.log(symbol1);

// const symbol2 = Symbol('description'); // створює символ з текстовим описом 'description'
// опис потрібен лише для налагодження
// Symbol('description') !== Symbol('description')

// const symbol3 = Symbol(42);       // число 42 перетвориться на рядок '42'
// і стане описом символу

// const symbol4 = Symbol('descr');
// const symbol5 = Symbol('descr');
// console.log(symbol4 === symbol5);

// Object НЕ Є ПРИМІТИВНИМ ТИПОМ

// const obj1 = {}

// let city= "Lviv"

// const obj2 = {
//   x: 1,
//   test: true,
//   age: 34,
//   cars: {
//     model: 'toyota',
//     year: 2034,
//     toyota: null
//   },
//   geo: city
// }

// console.log(model);
// console.log(obj2.cars.model);
// console.log(obj2.cars?.model);
// console.log(obj2.geo);


// ====================================
// ПЕРЕВІРКА ТИПІВ (typeof)
// ====================================

// Оператор typeof повертає рядок із назвою типу
// const x = 45
// console.log(x);
// const typeOfType = typeof x
// console.log(typeof typeOfType); // string

// console.log(typeof x);                   // "number"
// console.log(typeof (x - 4));              // "number"
// console.log(typeof (27 + 1));             // "number"
// console.log(typeof 27);                   // "number"

// console.log(typeof '2 метри');            // "string"

// console.log(typeof true);                 // "boolean"

// console.log(typeof undefined);            // "undefined"

// console.log(typeof null); // "object" - спеціальне значення, що часто використовується
// для позначення відсутності об'єктного значення
// console.log(typeof Symbol("any text"));    // "symbol"
// console.log(typeof 1234567890123456789012345678901234567890n); // "bigint"

// console.log(typeof {});                   // "object"

// console.log(typeof []);                   // "object"
// console.log(typeof [34, true]);                   // "object"

// console.log(typeof function () { });         // "function"

// // Альтернативний синтаксис typeof (як функція)
// console.log(typeof(42));                  // "number"
// console.log(typeof("Hello"));             // "string"
