// let x = 123
// let zero = 0

// x = x - 20



// let y = 232323
// let z = 1.34

// let word = 'test message'
// console.log(word[5]);

// Immutable (numder, string,boolean, null, undefined, bigint,symbol )
// Mutable (type - object, data - object and array)

// Implicit Type Conversion (неявне приведення типів - математичні, логічні  операції тощо)

// Explicit Type Conversion (явне приведення типів - функції-конструктори та окремі глобальні методи або методи базового прототипа)


// let message = "hello";
// let message1 = "hello asda sd";
// let message2 = "he";

// let i = 0, j = 0, k = 0
// let i = 3434, j = 0, k = 'sdfdfsfd'

// let i=y=x=j=0

// let i = 10, j = 2**i, k = 5 - j


// var
// let
// const


// CONDITIONAL statement

// if (condition) {

// }


// if (condition) {

// } else {

// }

// if (condition1) {

// } else if(condition2) {

// } else {

// }

// if (condition1) {

// } else if(condition2) {

// } else if(condition3) {

// }  else {

// }

// if (condition1) {

// } else if(condition2) {

// } else if(condition3) {

// }   


// if (змінна або значення або вираз) {
//   певна дія за умови що в (змінна або значення або вира) повертають true
// }

// if(0) {
//   console.log('виконується тіло if')
// }


// let message = ''
// let message = 'OK'

// console.log('виконується команда до перевірки умови в if');

// if(message) {
//   console.log('виконується тіло if')
//   // будь-який необхідний код
// }

// console.log('виконується команда після тіла if');

// let isTurn = false  // true або false
// let isTurn = true  // true або false

// if(isTurn === false) {
//   console.log('light is off');
// }
// if(!isTurn) {
//   console.log('light is off');
// } else {
//   console.log('light is on');
// }


// if(isTurn === false) {
//   console.log('light is off');
// }else {
//     console.log('light is on');
//   }

// let isTurn = "blackOut"  // true або false або "blackOut"
// let isTurn = true  // true або false або "blackOut"
// let isTurn = false  // true або false або "blackOut"

// if (isTurn === false) {
//   console.log('light is off');
// } else if (isTurn === true) {
//   console.log('light is on');
// } else {
//   console.log('energy is absent');
// }

// наступний код 

// let isTurn = false  // true або false або "blackOut"
// let isTurn = "blackOut"  // true або false або "blackOut"
// let isTurn = 454545454  // true або false або "blackOut"

// if (isTurn === false) {
//   console.log('light is off');
// } else if (isTurn === true) {
//   console.log('light is on');
// } else if(isTurn === "blackOut"){
//   console.log('energy is absent');
// } else {
//   console.log('*********')
// }

// 5 - 6

// let test = 5 - 6
// console.log(test);

// if (test > 90) {

// }

// if ((5 - 6) > 90) {

// }

// let test = 5555
// let test = null


// // if (typeof(test) === 'string' ) {
// if (typeof(test) === 'string' ) {
//   console.log('отримані дані рядкового типу');
// } else if (typeof(test) === 'number' ){
//   console.log(`отримані дані типу ${typeof test}`);
//   test += 124
// } else {
//   console.log(`отримані дані типу ${typeof test}`);
// }
// console.log(test);


// >, <, >=, <=, ==, ===, !=, !==

// let num1 = 3, num2 = 3;
// if (num1 == num2) {
//   console.log('виконується тіло if');
// }
// console.log('виконується код після if');

// let str = '3',
//   num = 3;
// if (str != num) {
//   console.log('виконується тіло if');
// }
// console.log('виконується код після if');
// if (str == num) {
//   console.log('виконується тіло if');
// }
// console.log('виконується код після if');
// if (str === num) {
//   console.log('виконується тіло if');
// }
// console.log('виконується код після if');


// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// let timeofDay = "ранок"
// let timeofDay = "night"
// switch (timeofDay) {
//   case 'ніч':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay}`);
//     break;
//   case 'ранок':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay}`);
//     break;
//   case 'день':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay}`);
//     break;
//   case 'вечір':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay}`);
//     break;

//   default: console.log('дані некоректні');

//     break;
// }
// let timeofDay = "test"
// let timeofDay = "день"
// switch (timeofDay) {
//   default: console.log('дані некоректні');

//     // break;
//   case 'ніч':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay} 1`);
//     // break;
//   case 'ранок':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay} 2`);
//     // break;
//   case 'день':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay} 3`);
//     // break;
//   case 'вечір':
//     // дія для певного case
//     console.log(`поточна частина дня ${timeofDay} 4`);
//     // break;

// }


// ?:
// operand1 ? operand2 : operand3
// condition ? повернеться як результат за умови conditional === true : повернеться як результат за умови conditional === false
const START_ID_AGE = 14
// let age = 15
let age = 13

// let isMakeId = (age >= 14)?('можеш отримати id'):( `ще маленький, приходь за ${START_ID_AGE - age} р.` )
let isMakeId = (age >= 14)
  ? ('можеш отримати id')
  : (`ще маленький, приходь за ${START_ID_AGE - age} р.`)

console.log(isMakeId);
