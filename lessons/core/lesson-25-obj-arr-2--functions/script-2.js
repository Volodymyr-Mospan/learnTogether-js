// function greet(userName) {
//     console.log(`Hello, ${userName}!`);
// }
// // Виклик функції
// greet('John'); // Виведе: "Hello, John!"
// greet('Alex'); // Виведе: "Hello, John!"
// greet('Roman'); // Виведе: "Hello, John!"
// greet('Marianna'); // Виведе: "Hello, John!"

// const functionsArray = [
//     function () { console.log("Перша функція"); },
//     function () { console.log("Друга функція"); }
// ];
// // functionsArray[0]
// console.log(functionsArray[0]); // Виведе: "Перша функція"
// // functionsArray[0]()
// // functionsArray[5]() // undefined()

// ?.
// const functionsArray = [
//     function () { console.log("Перша функція"); },
//     null,
//     function () { console.log("Третя функція"); }
// ];

// functionsArray[0]?.();  // Виведе: "Перша функція"
// functionsArray[1]?.();  // Нічого не виведеться
// functionsArray[2]?.();  // Виведе: "Третя функція"

// const person = {
//     userName: 'John',
//     // userName: {
//     //   firstName: 'John',
//     // //   lastName: 'Doe'
//     // },
//     // greet: function () {
//     //     console.log(`Hello, ${this.userName}!`);
//     // },
//     greet() {
//         console.log(`Hello, ${this.userName}!`);
//     },
//     myFunction: function () {
//         let test = 45 - 6
//         console.log("Функція викликана");
//         console.log(test);

//     }
// };

// //   console.log(person.userName); // Виведе: "John"
// //   console.log(person.userName?.firstName); // Виведе: "John"
// //   console.log(person.userName?.lastName); // Виведе: undefined
// console.log(person.greet);
// person.greet(); // Виведе: "Hello, John!"
// person.myFunction(); // Виведе: "Функція викликана"
// // person.myFunction1(); // Виведе: "Функція викликана"
// person.myFunction1?.(); // Виведе: "Функція викликана"


// function sayHello(userName) { // Оголошення функції sayHello з параметром userName
//     console.log(`Hello, ${userName}!`);
//   }

// function sayHello(userName) { // Оголошення функції sayHello з параметром userName
//     console.log(`Hello, ${userName}!`);
// }
// sayHello('John'); // Виклик функції sayHello з аргументом 'John'

// function sayHello(name, age) {

//     console.log(`Hello, ${name}, you are ${age} years old.`);
//   }

//   sayHello('John');

// function sayHello(name = 'Guest', age = 30) {
//     console.log(`Hello, ${name}, you are ${age} years old.`);
// }
// // sayHello('John', 25); // Виведе: "Hello, John, you are 25 years old."
// // sayHello('Alice'); // Виведе: "Hello, Alice, you are 30 years old."
// // sayHello(); // Виведе: "Hello, Guest, you are 30 years old."
// // sayHello('Bob', 40); // Виведе: "Hello, Bob, you are 40 years old."
// sayHello(undefined, 35); // Виведе: "Hello, Guest, you are 35 years old."
// sayHello(undefined, undefined); // Виведе: "Hello, Guest, you are 35 years old."
// sayHello(null, 35); // Виведе: "Hello, Guest, you are 35 years old."

// function sayHello(name = 'Guest', age = 30) {
//     console.log(`Hello, ${name}, you are ${age} years old.`);
//     console.log(arguments);
//     console.log(arguments[2]);

// }
// sayHello('John', 25, true); // Виведе: "Hello, John, you are 25 years old."
// console.dir(sayHello);


// function sum(...numbers) {
//     console.log(numbers); // Виведе: [1, 2, 3]
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     console.log(total);
//   }

// //   sum(1, 2, 3); // Виведе: 6
// //   sum(10, 20, 30, 40); // Виведе: 100
//   sum(true, ['test', 234]);


// function sum(firstParam,...reastParams) {
//   console.log(firstParam);
//     console.log(reastParams); 

//   }

// //   sum(1, 2, 3); // Виведе: 6
// //   sum(10, 20, 30, 40); // Виведе: 100
//   sum(true, ['test', 234], 999, null);

// function sum() {
//     // console.log(arguments);
//     // console.log(Array.from(arguments));
//     // console.log([...arguments]);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     console.log(total);
// }

// sum(1, 2, 3, 4); 

// const numbers = [1, 2, 3];
// const numbers = [1, 2];

// function sum(a, b, c = 0) {
//     // console.log("Arguments object:", arguments); // Arguments object: { '0': 1, '1': 2, '2': 3 }
//     return a + b + c;
// }

// const result = sum(...numbers); // Використання spread-оператора для розгортання масиву
// console.log(result); 


// const numbers = [1, 2, 3];


// function sum(...digits) {

//     return digits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }

// const result = sum(...numbers); // Використання spread-оператора для розгортання масиву
// console.log(result); 


// const user = {
//     userName: 'John',
//     age: 30,
//     email: 'john@example.com'
// };

// // function displayUserInfo(name, age, email) {
// // function displayUserInfo(shos) {
// function displayUserInfo({userName, age, email}) {
//     console.log(`Name: ${userName}, Age: ${age}, Email: ${email}`);
// }
// // displayUserInfo(user.userName, user.age, user.email)
// displayUserInfo(user); // TypeError: displayUserInfo is not a function


// function displayNumbers([first, second]) {
// function displayNumbers([first, second] = []) {
// function displayNumbers([first = 11, second = 22] = []) {
//     console.log(`First: ${first}, Second: ${second}`);
// }

// const numbers = [1, 2, 3, 4];

//   displayNumbers(numbers);
// displayNumbers();

// function displayInfo({ userName = 'Unknown', age = 0, email = 'N/A' } = {}) {
// function displayInfo({ userName, age, email } = {userName: 'Unknown', age: 0, email: 'N/A'}) {
//     console.log(`Name: ${userName}, Age: ${age}, Email: ${email}`);
// }

// displayInfo();
//   displayInfo({}); 


// let globalVar = "I'm global";

// function showGlobalVar() {
//     // Доступ до глобальної змінної в середині функції
//     console.log(globalVar);
//   }
//   showGlobalVar(); 

// function setGlobalVar() {
//     globalVar = "I'm global";
// }
// setGlobalVar();
// console.log(globalVar); // Виведе: "I'm global"


function setGlobalVar() {
    console.log(globalVar); // undefined
    
    if (typeof globalVar === 'undefined') {
        console.log(typeof globalVar);
        
        var globalVar = "I'm functional";
        // var globalVar = "I'm";
        console.log(globalVar);
        let testBlockZone = 45
        console.log(testBlockZone);
        const x = 90
        console.log(x);
    }
    console.log(globalVar);
    // console.log(testBlockZone); // ReferenceError: testBlockZone is not defined
    console.log(x); // ReferenceError: x is not defined
    
}
setGlobalVar();
console.log(globalVar);

