// function getMessage() {
//   return 'Це повідомлення повернуто з функції!';
// }
// const message = getMessage();
// console.log(message);

// function greet() {
//   console.log('Вітаємо у JavaScript!');
// }
// greet();


// function sumNumbers(numbersArray) {
//   let sum = 0;
//   for (const number of numbersArray) {
//     // sum = sum + number;
//     sum += number;
//   }
//   return sum;
// }

// const myNumbers1 = [10, 20, 30];
// const total1 = sumNumbers(myNumbers1);
// console.log('Сума чисел з першого масиву:', total1); // 60

// const myNumbers2 = [5, 5, 5, 5];
// const total2 = sumNumbers(myNumbers2);
// console.log('Сума чисел з другого масиву:', total2); // 20
// =========================



// const users1 = [
//   { name: 'Олег', age: 25 },
//   { name: 'Марія', age: 30 }
// ];
// const users2 = [
//   { name: 'Віталій', age: 22 },
//   { name: 'Юлія', age: 28 },
//   { name: 'Ірина', age: 33 }
// ];
// const users3 = [
//   { name: 'Сергій', age: 40 }
// ];

// printUserNames(users1)
// printUserNames(users2)


// function printUserNames(usersArray) {
//   usersArray.forEach((user) => {
//     console.log('Ім\'я користувача:', user.name);
//   });
// }

// printUserNames(users3)


// function scheduleCleaning(houseSize) {
//   const plan = houseSize === 'large' ? 'Прибирати кожен день' : 'Прибирати тричі на тиждень';
//   return plan;
// }
// // const cleaningSchedule = scheduleCleaning('large');
// const cleaningSchedule = scheduleCleaning('small');

// console.log('План прибирання:', cleaningSchedule);


// @param {number} eggsCount - Кількість яєць.
//  * @param {boolean} useOil - Використовувати олію чи ні.
//  * @param {boolean} mixEggs - Перемішувати яйця (робити омлет) чи ні.
//  * @param {string[]} ingredients - Додаткові інгредієнти (наприклад, ["сіль", "перець", "зелень"]).
