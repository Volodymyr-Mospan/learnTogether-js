// // Створення рядкового об'єкта
// const str = new String('приклад');
// console.log(str); // виведе: [String: 'приклад']

// // Створення числового об'єкта
// const num = new Number(42);

// // Створення булевого об'єкта
// const bool = new Boolean(true);

// Створення функції
// const func = new Function('x', 'y','z', 'return x - y');
// console.log(func);
// // const result = func(2, 3);
// // console.log(result);
// console.log(func(2, 3));
// console.log(2+3)


// const func1 = function (x,y) {
//     return x + y
// }
// console.log(func1);
// const result1 = func1(2, 3);
// console.log(result1);

// Створення об'єкта дати
// const today = new Date();
// console.log(today);
// console.dir(today);
// console.log(today.getTime());

// Створення HTML5 аудіоелемента
// const audio = new Audio('шлях/до/файлу.mp3');
// const audio = new Audio('');
// console.dir(audio);

// Створення об'єкта зображення
// const image = new Image();
// // image.src = 'шлях/до/зображення.png';
// image.src = 'https://placeimg.com/640/480/nature';
// console.dir(image);

// Створення об'єкта регулярного виразу
// const pattern = new RegExp('\\d+');
// console.log(pattern);
// console.dir(pattern);


// // Створення об'єкта помилки
// const err = new Error('Повідомлення про помилку');

// // Створення множини
// const set = new Set([1, 2, 3]);

// // Створення карти
// const map = new Map([['ключ', 'значення']]);

// // Створення промісу
// const promise = new Promise((resolve, reject) => { /* ... */ });

// // Запит на потік медіаданих (аудіо та відео)
// new MediaStream()

// // Синтез мови
// const utterance = new SpeechSynthesisUtterance('Привіт, світе!');


// Створення порожнього об'єкта
// const obj = new Object();
// console.log(obj);
// const obj1 = {};
// console.log(obj1);
// obj.name = 'Tom';
// obj.age = 22;
// console.log(obj);


// const obj1 = {};
// console.log(obj1);

// // створення нових властивостей' об'єкта
// obj1.name = 'Tom';
// console.log(obj1);
// console.log(obj1.name);

// obj1.age = 22;
// console.log(obj1);
// console.log(obj1.age);

// // створення нових властивостей-методів об'єкта
// obj1.greet = function () {
//     console.log(4-5); 
//     console.log(`Hello, my name is ${this.name}!`);
// }
// console.log(obj1);
// obj1.greet();


// const greet = function () {
//     console.log(`Hello, my name is Tom!`);
// }

// greet();

// const userName = 'John';
// const age = 30;

// const user = {
//     userName: userName,
//     age: age,
// }
// console.log(user);


// user.userName = 'Tom';
// console.log(user);


// const userName = 'John';
// const age = 30;
// const test = true

// const user = {
//     userName,
//     age,
//     test,
// }
// console.log(user);


// const hi = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}!`);
//     }
// }
// hi.greet();

// const hi={
//     greet() {
//         console.log(`Hello, my name is Tom!`);
//     }
// }
// hi.greet();


// const userName = 'John';
// const age = 30;
// const test = true

// const user = {
//     userName ,
//     age:100,
//     test,
//     greet() {
//         console.log(`Hello, my name is Tom!`);
//     }
// }
// console.log(user);
// console.log(age);
// console.log(user.age);

// const dataFromCarsAPI = {
//     brand: 'BMW',
//     model: 'X5',
//     year: 2019,
//     // country: {
//     //     name: 'Germany',
//     //     code: 'DE',
//     // }
// }
// console.log(dataFromCarsAPI.brand);
// console.log(dataFromCarsAPI.model); 
// console.log(dataFromCarsAPI.year);
// console.log(dataFromCarsAPI.country); // undefined
// console.log(dataFromCarsAPI.country.code); // TypeError: Cannot read property 'code' of undefined

// console.log(undefined.code); // TypeError: Cannot read property 'code' of undefined
// console.log('попередній код не спричинив зупинки програми через помилку');


// try {
//     console.log(dataFromCarsAPI.country.code);
// } catch (error) {
//     console.log(error);
//     // console.dir(error);
    
// }
// console.log('попередній код не спричинив зупинки програми через помилку');