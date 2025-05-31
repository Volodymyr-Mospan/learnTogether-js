<<<<<<< HEAD
// console.log(typeof []);
// console.log([]);

// початковиймасив.методІтератор(функціяанонімна або стрілкова, thisArg)
// початковиймасив.методІтератор(стрілкова)
// початковиймасив.методІтератор((елемент масива,індекс,початковий масив)=>{})
// початковиймасив.методІтератор((елемент масива,індекс)=>{})
// початковиймасив.методІтератор((елемент масива)=>{})
// 
// // ЖОДЕН МЕТОД-ітератор БЕЗПСЕРЕДНЬО НЕ ВПЛИВАЄ НА МАСИВ ДО ЯКОГО ІН ВИКЛИКАНИЙ
// ФУНКЦІЯ ЯКУ ПЕРЕДАЄМО, ТАК, МОЖЕ ЗМІНИТИ
// const numbers1 = [10, 22, 33, 44, 555]
// console.log(numbers1);

// numbers1.forEach((value, i, newNameArray)=>{
//     console.log(value + 2);
//     console.log(i);
//     console.log(newNameArray);
//     newNameArray[0] = 1000

// })
// console.log(numbers1);
// numbers1.forEach((value, i, numbers1)=>{
//     console.log(value + 2);
//     console.log(i);
//     numbers1[0] = 1000

// })
// console.log(numbers1);


// const numbers1 = [10, 22, 33, 44, 555]
// console.log(numbers1);
// numbers1.forEach((value, i, numbers1)=>{
//     value = value*2
// })
// console.log(numbers1);


// numbers1.forEach((value)=>console.log(value**2))
// numbers1.forEach(value=>console.log(value**2))


// const numbers1 = [10, 22, 33, 44, 555]
// const oneElseArr = []

// numbers1.forEach((num, i) => { oneElseArr[i] = num})
// console.log("Новий Масив", oneElseArr);
// console.log("Початковий Масив", numbers1);
// numbers1.forEach((num, i) => { oneElseArr[i] = num + 1 })
// console.log("Новий Масив", oneElseArr);
// console.log("Початковий Масив", numbers1);

// const numbers1 = [10, 22, 33, 44, 555]
// const oneElseArr = []
// const result = numbers1.forEach((num, i) => oneElseArr[i] = num + 1) // undefined
// console.log("Новий Масив", oneElseArr);
// console.log("Початковий Масив", numbers1);
// console.log(result);

// const numbers1 = [[10,30], [22,44]]
// numbers1.forEach((num)=>{
//     console.log(num[0]);
//     console.log(num[1]);

// })


// const numbers1 = [10, 22, 33, 44, 555]

// const result = numbers1.map(num =>  num + 1) 
// console.log("Початковий Масив", numbers1);
// console.log(result);
// const numbers1 = [10, 22, 33, 44, 555]

// const result = numbers1.map(num => {
//     if (num % 2 === 0) {
//         return num
//     }
//     return num + 1
// })
// console.log("Початковий Масив", numbers1);
// console.log(result);
// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const multiplier = 5
// const result = numbers1.map((num) => {

//     return num * multiplier
// })

// console.log(result);
// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = numbers1.map((num) => {
//     let oneSet = []
//     for (let i = 0; i < 10; i++) {
//         // console.log(num * i);
//         oneSet[i] = num * (i + 1)
//     }
//     console.log(oneSet);

//     return oneSet
// })

// console.log(result);
// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbers1 = [1, 2, 3, 4, 5, true, 7, 8, null, 10]

// // const result = numbers1.map((num) => num.toString())
// const result = numbers1.map((num) => typeof num)

// console.log(result);

// const numbers1 = [1, 2, , 4, 5];
// // Використання методу map
// const doubled = numbers1.map((item) => item * 2);

// console.log('Приклад 1: Подвоєння елементів масиву з пустими елементами');
// console.log(doubled);

// const persons = [
//     { userName: 'Alice', age: 25 },
//     { userName: 'Bob', age: 30 },
//     { userName: 'Charlie', age: 35 },
//   ];

//   const namesBox1 = persons.forEach((box)=>{console.log(box.userName)})
//   console.log(namesBox1);

//   const namesBox2 = persons.map((box)=>{console.log(box.userName)})
//   console.log(namesBox2);
//   const namesBox2 = persons.map((box)=>box.userName)
//   console.log(namesBox2);
//   const namesBox3 = persons.map((box)=>box.age)
//   console.log(namesBox3);


// const numbers1 = [10, 22, 33, 44, 555]

// // const evenNumbers = numbers1.filter((num) => (num % 2) === 0)
// const evenNumbers = numbers1.filter((num) => (num % 2) !== 0)
// console.log(evenNumbers);

// const numbers1 = [0, 10, , 33, null, 555, , undefined, NaN]
// // const numbers1 = [ 10, , 33, , 555,]
// // const result = numbers1.filter(()=> true)
// // const result = numbers1.filter((num) => num)
// const result = numbers1.filter((num) => num !== undefined && num !== null)
// console.log(result);




// ФІЛЬТРИ З МАСИВ ОБ'ЄКТІВ

// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Diana', age: 28 }
// ];
// const personsOver30 = persons.filter(person => person.age >= 30);
// console.log(personsOver30);
// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Diana', age: 28 }
// ];
// // const personsOver30 =
// //     persons
// //         .filter(person => person.age >= 30)
// //         .map(person => person.name)


// console.log(personsOver30);

// const personsOver30 = persons.filter(person => person.age >= 30)
// console.log(personsOver30);

// const namesPersonOver30 = personsOver30.map(person =>person.name)
// console.log(namesPersonOver30);


// find та findIndex
// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   const personOver30 = persons.find(person => person.age >= 30);
//   console.log(personOver30);
// const persons = [
//     { name: 'Alice', age: 25 },
//     // { name: 'Bob', age: 30 },
//     // { name: 'Charlie', age: 35 }
//   ];

//   const personOver30 = persons.findIndex(person => person.age >= 30);
//   console.log(personOver30);


// const numbers1 = [10, 22, 33, 44, -555]

// const isAllPositive = numbers1.every(num => num > 0)
// console.log(isAllPositive);

// const numbers1 = [10, 22, 33, 44, -555]
// const numbers1 = [10, 22, 33,, 44, 34]

// const isOneOfAllNegative = numbers1.some(num => {
//     console.log(num);
//     return num<0

// })
// console.log(isOneOfAllNegative);

// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue)=> accumulator+currentValue)
// debuggerconsole.log(sum);

// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue) => {
//     debugger
//     return accumulator + currentValue
// })
// debuggerconsole.log(sum);

// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue)=> accumulator+currentValue, 1000)
// console.log(sum);


// REDUCE
// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue) => {
//     // debugger
//     return accumulator + currentValue
// }, 1000)
// console.log(sum);

// const numbers1 = [10, 25, 30, 20, 15]
// let testCondition = 0
// const sum = numbers1.reduce((accumulator, currentValue, i) => {

//     // debugger
//     // testCondition = !(i % 2)
//     // testCondition = !(i % 2)

//     // if (!(i % 2) === 0) {
//     //     return accumulator + currentValue
//     // } else {
//     //     return accumulator
//     // }

//     // if (!(i % 2)) {
//     //     return accumulator + currentValue
//     // } else {
//     //     return accumulator
//     // }
//     if (i % 2) {
//         return accumulator
//     } else {
//         return accumulator + currentValue
//     }

// }, 1000)
// console.log(sum);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

// const countFruits = fruits.reduce((acc, curr)=>{
//     // debugger
//     console.log(acc, curr)
//     return acc
// },{})
// console.log(countFruits);

// const countFruits = fruits.reduce((acc, curr)=>{
//     // debugger
//     acc.counter += 1
//     console.log(acc, curr)
//     return acc
// },{counter:0})
// console.log(countFruits);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const countFruits = fruits.reduce((acc, curr) => {
//     // debugger
//     console.log(acc, curr)
//     // acc[curr] = 1
//     // acc[curr] += 1
//     // debugger
//     acc[curr] = (acc[curr] || 0) + 1

//     // acc[curr] = (acc[curr] !== undefined ? acc[curr] : 0) + 1

//     // if (!acc[curr] ) {
//     //     acc[curr] = 1
//     // } else {
//     //     acc[curr] += 1
//     // }
//     // if (acc[curr] === undefined ) {
//     //     acc[curr] = 1
//     // } else {
//     //     acc[curr] += 1
//     // }

//     return acc
// }, {})
// console.log(countFruits);

// const fr = {
//     apple: 1,
//     banana: 1,
//     orange: 1,
// }


// console.log(fr);
// fr.apple = 1
// console.log(fr);
// fr.apple = 100
// console.log(fr);

// const acc = {
// }

// let curr = 'apple'
// acc[curr] = 1
// console.log(acc);

// const acc = {
// }
// console.log(acc.apple);


// 0 null undefined -0 NaN '' false

// const resultOr = undefined || 0
// console.log(resultOr);
// const resultOr = undefined || 1000
// console.log(resultOr);
// const resultOr = 1000 || undefined  
// console.log(resultOr);
// const resultOr = 1 || 10 
// console.log(resultOr);


// const numbers = [12, 45, 7, 99, 34];
// // console.log(Math.max(2,5,77));
// const largestNumber = numbers.reduce((acc, curr)=>{
//     console.log(`${acc} > ${curr}`);

//     return Math.max(acc, curr)
// })
// console.log(largestNumber);



const arrayOfObjects = [
    { key: 'name', value: 'Alice' },
    { key: 'age', value: 25 },
    { key: 'job', value: 'developer' }
];

//   const mergeObject1 = arrayOfObjects.reduce((acc,curr)=>{
//     console.log(acc, curr);
//     // acc[key]

//   },{})
// console.log('--');

const mergeObject2 = arrayOfObjects.reduce((acc, { key, value }) => {
    console.log("Початкові дані на ітерації:");
    console.log(acc, key, value);
    acc[key] = value
    console.log("Повертаємо в ACC:");
    console.log(acc);

    return acc
}, {})
console.log(mergeObject2);

=======
// console.log(typeof []);
// console.log([]);

// початковиймасив.методІтератор(функціяанонімна або стрілкова, thisArg)
// початковиймасив.методІтератор(стрілкова)
// початковиймасив.методІтератор((елемент масива,індекс,початковий масив)=>{})
// початковиймасив.методІтератор((елемент масива,індекс)=>{})
// початковиймасив.методІтератор((елемент масива)=>{})
// 
// // ЖОДЕН МЕТОД-ітератор БЕЗПСЕРЕДНЬО НЕ ВПЛИВАЄ НА МАСИВ ДО ЯКОГО ІН ВИКЛИКАНИЙ
// ФУНКЦІЯ ЯКУ ПЕРЕДАЄМО, ТАК, МОЖЕ ЗМІНИТИ
// const numbers1 = [10, 22, 33, 44, 555]
// console.log(numbers1);

// numbers1.forEach((value, i, newNameArray)=>{
//     console.log(value + 2);
//     console.log(i);
//     console.log(newNameArray);
//     newNameArray[0] = 1000

// })
// console.log(numbers1);
// numbers1.forEach((value, i, numbers1)=>{
//     console.log(value + 2);
//     console.log(i);
//     numbers1[0] = 1000

// })
// console.log(numbers1);


// const numbers1 = [10, 22, 33, 44, 555]
// console.log(numbers1);
// numbers1.forEach((value, i, numbers1)=>{
//     value = value*2
// })
// console.log(numbers1);


// numbers1.forEach((value)=>console.log(value**2))
// numbers1.forEach(value=>console.log(value**2))


// const numbers1 = [10, 22, 33, 44, 555]
// const oneElseArr = []

// numbers1.forEach((num, i) => { oneElseArr[i] = num})
// console.log("Новий Масив", oneElseArr);
// console.log("Початковий Масив", numbers1);
// numbers1.forEach((num, i) => { oneElseArr[i] = num + 1 })
// console.log("Новий Масив", oneElseArr);
// console.log("Початковий Масив", numbers1);

// const numbers1 = [10, 22, 33, 44, 555]
// const oneElseArr = []
// const result = numbers1.forEach((num, i) => oneElseArr[i] = num + 1) // undefined
// console.log("Новий Масив", oneElseArr);
// console.log("Початковий Масив", numbers1);
// console.log(result);

// const numbers1 = [[10,30], [22,44]]
// numbers1.forEach((num)=>{
//     console.log(num[0]);
//     console.log(num[1]);

// })


// const numbers1 = [10, 22, 33, 44, 555]

// const result = numbers1.map(num =>  num + 1) 
// console.log("Початковий Масив", numbers1);
// console.log(result);
// const numbers1 = [10, 22, 33, 44, 555]

// const result = numbers1.map(num => {
//     if (num % 2 === 0) {
//         return num
//     }
//     return num + 1
// })
// console.log("Початковий Масив", numbers1);
// console.log(result);
// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const multiplier = 5
// const result = numbers1.map((num) => {

//     return num * multiplier
// })

// console.log(result);
// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = numbers1.map((num) => {
//     let oneSet = []
//     for (let i = 0; i < 10; i++) {
//         // console.log(num * i);
//         oneSet[i] = num * (i + 1)
//     }
//     console.log(oneSet);

//     return oneSet
// })

// console.log(result);
// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbers1 = [1, 2, 3, 4, 5, true, 7, 8, null, 10]

// // const result = numbers1.map((num) => num.toString())
// const result = numbers1.map((num) => typeof num)

// console.log(result);

// const numbers1 = [1, 2, , 4, 5];
// // Використання методу map
// const doubled = numbers1.map((item) => item * 2);

// console.log('Приклад 1: Подвоєння елементів масиву з пустими елементами');
// console.log(doubled);

// const persons = [
//     { userName: 'Alice', age: 25 },
//     { userName: 'Bob', age: 30 },
//     { userName: 'Charlie', age: 35 },
//   ];

//   const namesBox1 = persons.forEach((box)=>{console.log(box.userName)})
//   console.log(namesBox1);

//   const namesBox2 = persons.map((box)=>{console.log(box.userName)})
//   console.log(namesBox2);
//   const namesBox2 = persons.map((box)=>box.userName)
//   console.log(namesBox2);
//   const namesBox3 = persons.map((box)=>box.age)
//   console.log(namesBox3);


// const numbers1 = [10, 22, 33, 44, 555]

// // const evenNumbers = numbers1.filter((num) => (num % 2) === 0)
// const evenNumbers = numbers1.filter((num) => (num % 2) !== 0)
// console.log(evenNumbers);

// const numbers1 = [0, 10, , 33, null, 555, , undefined, NaN]
// // const numbers1 = [ 10, , 33, , 555,]
// // const result = numbers1.filter(()=> true)
// // const result = numbers1.filter((num) => num)
// const result = numbers1.filter((num) => num !== undefined && num !== null)
// console.log(result);




// ФІЛЬТРИ З МАСИВ ОБ'ЄКТІВ

// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Diana', age: 28 }
// ];
// const personsOver30 = persons.filter(person => person.age >= 30);
// console.log(personsOver30);
// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Diana', age: 28 }
// ];
// // const personsOver30 =
// //     persons
// //         .filter(person => person.age >= 30)
// //         .map(person => person.name)


// console.log(personsOver30);

// const personsOver30 = persons.filter(person => person.age >= 30)
// console.log(personsOver30);

// const namesPersonOver30 = personsOver30.map(person =>person.name)
// console.log(namesPersonOver30);


// find та findIndex
// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   const personOver30 = persons.find(person => person.age >= 30);
//   console.log(personOver30);
// const persons = [
//     { name: 'Alice', age: 25 },
//     // { name: 'Bob', age: 30 },
//     // { name: 'Charlie', age: 35 }
//   ];

//   const personOver30 = persons.findIndex(person => person.age >= 30);
//   console.log(personOver30);


// const numbers1 = [10, 22, 33, 44, -555]

// const isAllPositive = numbers1.every(num => num > 0)
// console.log(isAllPositive);

// const numbers1 = [10, 22, 33, 44, -555]
// const numbers1 = [10, 22, 33,, 44, 34]

// const isOneOfAllNegative = numbers1.some(num => {
//     console.log(num);
//     return num<0

// })
// console.log(isOneOfAllNegative);

// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue)=> accumulator+currentValue)
// debuggerconsole.log(sum);

// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue) => {
//     debugger
//     return accumulator + currentValue
// })
// debuggerconsole.log(sum);

// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue)=> accumulator+currentValue, 1000)
// console.log(sum);


// REDUCE
// const numbers1 = [10, 25, 30, 20, 15]
// const sum = numbers1.reduce((accumulator, currentValue) => {
//     // debugger
//     return accumulator + currentValue
// }, 1000)
// console.log(sum);

// const numbers1 = [10, 25, 30, 20, 15]
// let testCondition = 0
// const sum = numbers1.reduce((accumulator, currentValue, i) => {

//     // debugger
//     // testCondition = !(i % 2)
//     // testCondition = !(i % 2)

//     // if (!(i % 2) === 0) {
//     //     return accumulator + currentValue
//     // } else {
//     //     return accumulator
//     // }

//     // if (!(i % 2)) {
//     //     return accumulator + currentValue
//     // } else {
//     //     return accumulator
//     // }
//     if (i % 2) {
//         return accumulator
//     } else {
//         return accumulator + currentValue
//     }

// }, 1000)
// console.log(sum);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

// const countFruits = fruits.reduce((acc, curr)=>{
//     // debugger
//     console.log(acc, curr)
//     return acc
// },{})
// console.log(countFruits);

// const countFruits = fruits.reduce((acc, curr)=>{
//     // debugger
//     acc.counter += 1
//     console.log(acc, curr)
//     return acc
// },{counter:0})
// console.log(countFruits);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const countFruits = fruits.reduce((acc, curr) => {
//     // debugger
//     console.log(acc, curr)
//     // acc[curr] = 1
//     // acc[curr] += 1
//     // debugger
//     acc[curr] = (acc[curr] || 0) + 1

//     // acc[curr] = (acc[curr] !== undefined ? acc[curr] : 0) + 1

//     // if (!acc[curr] ) {
//     //     acc[curr] = 1
//     // } else {
//     //     acc[curr] += 1
//     // }
//     // if (acc[curr] === undefined ) {
//     //     acc[curr] = 1
//     // } else {
//     //     acc[curr] += 1
//     // }

//     return acc
// }, {})
// console.log(countFruits);

// const fr = {
//     apple: 1,
//     banana: 1,
//     orange: 1,
// }


// console.log(fr);
// fr.apple = 1
// console.log(fr);
// fr.apple = 100
// console.log(fr);

// const acc = {
// }

// let curr = 'apple'
// acc[curr] = 1
// console.log(acc);

// const acc = {
// }
// console.log(acc.apple);


// 0 null undefined -0 NaN '' false

// const resultOr = undefined || 0
// console.log(resultOr);
// const resultOr = undefined || 1000
// console.log(resultOr);
// const resultOr = 1000 || undefined  
// console.log(resultOr);
// const resultOr = 1 || 10 
// console.log(resultOr);


// const numbers = [12, 45, 7, 99, 34];
// // console.log(Math.max(2,5,77));
// const largestNumber = numbers.reduce((acc, curr)=>{
//     console.log(`${acc} > ${curr}`);

//     return Math.max(acc, curr)
// })
// console.log(largestNumber);



const arrayOfObjects = [
    { key: 'name', value: 'Alice' },
    { key: 'age', value: 25 },
    { key: 'job', value: 'developer' }
];

//   const mergeObject1 = arrayOfObjects.reduce((acc,curr)=>{
//     console.log(acc, curr);
//     // acc[key]

//   },{})
// console.log('--');

const mergeObject2 = arrayOfObjects.reduce((acc, { key, value }) => {
    console.log("Початкові дані на ітерації:");
    console.log(acc, key, value);
    acc[key] = value
    console.log("Повертаємо в ACC:");
    console.log(acc);

    return acc
}, {})
console.log(mergeObject2);

>>>>>>> ae1d60e (adds update to  hw x-0)
