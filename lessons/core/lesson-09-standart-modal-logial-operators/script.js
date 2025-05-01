// console.log(navigator);
// console.log(window);
// console.log(document);

// window.alert()
// alert('Hi!')
// console.log('Hi!');

// /**
//  * Використання alert() для відображення повідомлення користувачу
//  * alert() показує модальне вікно з повідомленням і кнопкою OK
//  * @example
//  */
// alert("Це приклад використання функції alert()");

// /**
//  * Використання confirm() для отримання підтвердження від користувача
//  * confirm() показує модальне вікно з повідомленням і кнопками OK та Cancel
//  * @returns {boolean} true, якщо користувач натиснув OK, false - якщо Cancel
//  * @example
//  */
// const isConfirmed = confirm("Ви згодні продовжити?");
// console.log("Результат вибору користувача: " + isConfirmed);

// confirm("Ви згодні продовжити?");



// /**
//  * Використання prompt() для отримання введення від користувача
//  * prompt() показує модальне вікно з полем введення, повідомленням і кнопками OK та Cancel
//  * @param {string} message - Повідомлення, яке відображається користувачу
//  * @param {string} [defaultValue=""] - Значення за замовчуванням у полі введення
//  * @returns {string|null} Введений користувачем текст або null, якщо користувач натиснув Cancel
//  * @example
//  */
// const userName = prompt("Будь ласка, введіть ваше ім'я:", "Гість");
// if (userName) {
//   console.log("Привіт, " + userName + "!");
// } else {
//   console.log(userName);
//   console.log("Користувач не ввів ім'я");
// }

// const userYearBorn = prompt("Будь ласка, введіть ваш рік народження:", "замість цього текста введіть рік в форматі \"0000\" (лапки не потрібні)");
// const userYearBorn = +prompt("Будь ласка, введіть ваш рік народження:", "замість цього текста введіть рік в форматі \"0000\" (лапки не потрібні)");


// console.log(userYearBorn);
// console.log(typeof userYearBorn);

// if (userYearBorn) {
//   console.log("Вам " + (2025 - userYearBorn));
// } else {
//   console.log("Користувач не ввів рік");
// }



// && - AND
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// let age = 25;
// let age = 17;
// let age = 17;
// let age;
// let hasDriverLicense = true; // успішний екзамен ПДР
// let hasDriverLicense = false; // успішний екзамен ПДР
// let hasDriverLicense = null
// 
// console.log(age>=25); 
// console.log(hasDriverLicense);
// console.log(age>=25 && hasDriverLicense)

// if (age >= 18 && hasDriverLicense) {
//   console.log("Ви можете отримати водійське посвідчення.");
// } else {
//   console.log("Ви не можете отримати водійське посвідчення.");
// }

// const negative = age && hasDriverLicense
// console.log(negative);

// short-circuiting

// || - OR
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// // console.log(100 || null);
// // console.log(null || "Ivan");
// // console.log(100 || "Ivan");

// console.log(false && undefined);
// console.log(false || undefined);

// /**
//  * Статус студента
//  * @type {boolean}
//  */
// let isStudent = false;

// /**
//  * Статус працевлаштування
//  * @type {boolean}
//  */
// let hasJob = true;

// /**
//  * Перевіряє чи може користувач отримати кредит
//  * на основі статусу студента або працевлаштування
//  * @returns {void}
//  */
// if (isStudent || hasJob) {
//   console.log("Ви можете отримати кредит.");
// } else {
//   console.log("Ви не можете отримати кредит.");
// }



// ! - not (!!)
// !вираз
// !літерал

// null  - дійсне false
// console.log(!null);

// 1000 - дійсне true
// console.log(!1000);

// console.log(!false);
// console.log(!0);
// console.log(!-0);
// console.log(!"");
// console.log(!null);
// console.log(!undefined);
// console.log(!NaN);

// console.log(!-10);
// console.log(!Infinity);
// console.log(!-Infinity);
// console.log(![]);
// console.log(!{});


// console.log(Boolean(343534)); // дійсне значення true
// console.log(!!343534); // також отримання дійсного бульовського значення
// console.log(!343534);  // просто робота оператора not


// /**
//  * Статус онлайн користувача
//  * @type {boolean}
//  */
// let isOnline = true;

// /**
//  * Інвертоване значення статусу онлайн
//  * @type {boolean}
//  */
// let invertedValue = !isOnline;
// console.log(invertedValue); // Виведе false

// let username
// let username = 'Marko Polo'
// let username = 13
// if (username == null) username = "empty"; 
// if (!username) username = "empty"; 
// if (!username) {
//   username = "empty";
// }
// console.log(username);


// If username is null, undefined, false, 0, "", or NaN, give it a new value
// if (!username) username = 'empty';

// if (!address) {
//   address = '';
//   message = 'Please specify a mailing address.';
// }


/* @type {boolean} */
/**
 * Індикатор сонячної погоди
//  * 
//  */
// let isSunny = true;

// /**
//  * Індикатор вихідного дня
//  * @type {boolean}
//  */
// let isWeekend = false;

// /**
//  * Результат перевірки чи можна йти на прогулянку
//  * @type {boolean}
//  */
// let goForWalk = isSunny && isWeekend;

// console.log(goForWalk); // Виведе false

// const multiOperands = (100 || null) && ('shugar' || 'salt') 
// const multiOperands = (100 || null) && ('shugar' && 'salt') 
// const multiOperands = 100 || null && 'shugar' || 'salt' 
// const multiOperands = 100 || null || 'salt' 
// console.log(multiOperands);
