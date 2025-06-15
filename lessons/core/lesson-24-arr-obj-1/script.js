// let x = 1
// let y = 1
// console.log(x === y) // true;


// const obj1 = {a: 1}
// const obj2 = {a: 1}
// const obj3 = obj1

// console.log(obj1 == obj2) // false
// console.log(obj1 === obj2) // false
// console.log(obj1 == obj3) // true
// console.log(obj1 === obj3) // true

// const objA = { value: 42 };
// const objB = objA;
// const objC = { value: 42 };

// console.log(objA === objC); // false
// console.log(objA == objB); //true

// const obj1 = { value: 10 };
// const obj2 = obj1;
// console.log(obj1);
// console.log(obj2); // { value: 10 }
// // obj1.value = 20;
// // console.log(obj1); // { value: 20 }
// // console.log(obj2); // { value: 20 }
// obj2.value = 30;
// console.log(obj1); // { value: 30 }
// console.log(obj2); // { value: 30 }

// const array1 = [1, 2, 3];
// const array2 = array1;
// const array3 = [1, 2, 3];
// console.log(array1 === array2); // true
// // console.log(array1 === array3); // false
// // console.log(array2 === array3); // false
// console.log(array1); // [1, 2, 3]
// console.log(array2); // [1, 2, 3]
// array1.push(4);
// console.log(array2);
// console.log(array1);


// const object1 = { a: 1, b: 2, c: 3 };
// const object2 = {};
// for (const key in object1) {
//     console.log(key); // a, b, c
//     object2[key] = object1[key];  
// }
// console.log(object2); // { a: 1, b: 2, c: 3 }
// console.log(object1 === object2); // false

// object1.a = 10;
// console.log(object1); // { a: 10, b: 2, c: 3 }
// console.log(object2); // { a: 1, b: 2, c: 3 }

// object2.a = 200;
// console.log(object1); // { a: 10, b: 2, c: 3 }
// console.log(object2); // { a: 200, b: 2, c: 3 }



// const object1 = { a: 1, b: 2, c: 3 };
// // const object2 = {};
// const object2 = object1; // Присвоєння посилання на об'єкт
// for (const key in object1) {
//     // console.log(key); // a, b, c
//     object2[key] = object1[key];
// }
// console.log(object2); // { a: 1, b: 2, c: 3 }
// console.log(object1 === object2); // false

// let objectsAreEqual = true;
// for (const key in object1) {
//     console.log(object1[key] !== object2[key]);
//     if (object1[key] !== object2[key]) {
//         objectsAreEqual = false;
//         break;
//     }
// }
// console.log(objectsAreEqual);
// if (objectsAreEqual) {
//     console.log('Значення властивостей об\'єктів однакові'); 
//   } else {
//     console.log('Значення властивостей об\'єктів не однакові'); 
//   }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [];
// for (let i = 0; i < array1.length; i++) {
//   array2[i] = array1[i];
// }
// // console.log(array2); // [1, 2, 3, 4, 5]
// console.log(array1 === array2); // false

// let arraysAreEqual = true;
// if (array1.length !== array2.length) {
//   arraysAreEqual = false;
// } else {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       arraysAreEqual = false;
//       break;
//     }
//   }
// }
// if (arraysAreEqual) {
//   console.log('Масиви однакові');
// } else {
//   console.log('Масиви не однакові');
// }

// const object1 = { a: 1, b: 2, c: 3 };
// for (const key in object1) {
//     console.log(key); // a, b, c

// }

// const array = [10, 20, 30];
// array.someProperty = 'someValue';
// console.log(array.someProperty); // 'someValue'
// console.log(array); // [10, 20, 30]

// for (const index in array) {
//     console.log(`Index: ${index}, Value: ${array[index]}`);
// }
// for (const element of array) {
//     console.log(`Element: ${element}`);

// }

// const object = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
//   };
//   for (const element of Object.entries(object)) {
//     console.log(`Key: ${element[0]}, Value: ${element[1]}`);

//   }
//   for (const [key, value] of Object.entries(object)) {
//     console.log(`Key: ${key}, Value: ${value}`);

//   }
// const person = {
//     userName: 'Ivan',
//     age: 30,
//     city: 'Kyiv'
//   };

//   for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//       console.log(`Key: ${key}, Value: ${person[key]}`);
//     }
//     console.log(`Key: ${key}, Value: ${person[key]}`);
//     }

// const animal = { species: "Dog", legs: 4, color: "black" }
// console.log(animal);
// console.log(animal.species);
// console.log(animal.legs);
// console.log(animal.color);

// // Object.create(proto)
// const person = Object.create(animal)
// console.log(person);
// console.log(person.species); // Dog
// console.log(person.legs); // 4
// console.log(person.color); // black
// person.age = 30
// person.firstName = "John"
// console.log(person);

// for (const key in person) {
//     // if (person.hasOwnProperty(key)) {
//     //   console.log(`Key: ${key}, Value: ${person[key]}`);
//     // }
//     console.log(`Key: ${key}, Value: ${person[key]}`);
// }

const prototypeArray = { inheritedProperty: 'inherited' };
const array = Object.create(prototypeArray);
// console.log(array); // {}
// array[0] = 'first element';
// array[0] = 'first element';
// console.log(array); // { '0': 'first element' }
// const test = '0'
// console.log(array[test]); // 'first element'
// const test1 = 0
// console.log(array[test1]); // 'first element'

// array[0] = 'first element';
// array[1] = 'second element';
// array[2] = 'third element';
// console.log(array); // { '0': 'first element', '1': 'second element', '2': 'third element' }

// for (const key in array) {
//     console.log(`Key: ${key}, Value: ${array[key]}`);
    
    
// }

