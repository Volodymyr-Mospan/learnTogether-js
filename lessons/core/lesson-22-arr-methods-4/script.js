// // console.log(typeof []);
// // console.log([]);

// // початковиймасив.методІтератор(функціяанонімна або стрілкова, thisArg)
// // початковиймасив.методІтератор(стрілкова)
// // початковиймасив.методІтератор((елемент масива,індекс,початковий масив)=>{})
// // початковиймасив.методІтератор((елемент масива,індекс)=>{})
// // початковиймасив.методІтератор((елемент масива)=>{})
// // 
// // // ЖОДЕН МЕТОД-ітератор БЕЗПСЕРЕДНЬО НЕ ВПЛИВАЄ НА МАСИВ ДО ЯКОГО ІН ВИКЛИКАНИЙ
// // ФУНКЦІЯ ЯКУ ПЕРЕДАЄМО, ТАК, МОЖЕ ЗМІНИТИ
// // const numbers1 = [10, 22, 33, 44, 555]
// // console.log(numbers1);

// // numbers1.forEach((value, i, newNameArray)=>{
// //     console.log(value + 2);
// //     console.log(i);
// //     console.log(newNameArray);
// //     newNameArray[0] = 1000

// // })
// // console.log(numbers1);
// // numbers1.forEach((value, i, numbers1)=>{
// //     console.log(value + 2);
// //     console.log(i);
// //     numbers1[0] = 1000

// // })
// // console.log(numbers1);


// // const numbers1 = [10, 22, 33, 44, 555]
// // console.log(numbers1);
// // numbers1.forEach((value, i, numbers1)=>{
// //     value = value*2
// // })
// // console.log(numbers1);


// // numbers1.forEach((value)=>console.log(value**2))
// // numbers1.forEach(value=>console.log(value**2))


// // const numbers1 = [10, 22, 33, 44, 555]
// // const oneElseArr = []

// // numbers1.forEach((num, i) => { oneElseArr[i] = num})
// // console.log("Новий Масив", oneElseArr);
// // console.log("Початковий Масив", numbers1);
// // numbers1.forEach((num, i) => { oneElseArr[i] = num + 1 })
// // console.log("Новий Масив", oneElseArr);
// // console.log("Початковий Масив", numbers1);

// // const numbers1 = [10, 22, 33, 44, 555]
// // const oneElseArr = []
// // const result = numbers1.forEach((num, i) => oneElseArr[i] = num + 1) // undefined
// // console.log("Новий Масив", oneElseArr);
// // console.log("Початковий Масив", numbers1);
// // console.log(result);

// // const numbers1 = [[10,30], [22,44]]
// // numbers1.forEach((num)=>{
// //     console.log(num[0]);
// //     console.log(num[1]);

// // })


// // const numbers1 = [10, 22, 33, 44, 555]

// // const result = numbers1.map(num =>  num + 1) 
// // console.log("Початковий Масив", numbers1);
// // console.log(result);
// // const numbers1 = [10, 22, 33, 44, 555]

// // const result = numbers1.map(num => {
// //     if (num % 2 === 0) {
// //         return num
// //     }
// //     return num + 1
// // })
// // console.log("Початковий Масив", numbers1);
// // console.log(result);
// // const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const multiplier = 5
// // const result = numbers1.map((num) => {

// //     return num * multiplier
// // })

// // console.log(result);
// // const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const result = numbers1.map((num) => {
// //     let oneSet = []
// //     for (let i = 0; i < 10; i++) {
// //         // console.log(num * i);
// //         oneSet[i] = num * (i + 1)
// //     }
// //     console.log(oneSet);

// //     return oneSet
// // })

// // console.log(result);
// // const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const numbers1 = [1, 2, 3, 4, 5, true, 7, 8, null, 10]

// // // const result = numbers1.map((num) => num.toString())
// // const result = numbers1.map((num) => typeof num)

// // console.log(result);

// // const numbers1 = [1, 2, , 4, 5];
// // // Використання методу map
// // const doubled = numbers1.map((item) => item * 2);

// // console.log('Приклад 1: Подвоєння елементів масиву з пустими елементами');
// // console.log(doubled);

// // const persons = [
// //     { userName: 'Alice', age: 25 },
// //     { userName: 'Bob', age: 30 },
// //     { userName: 'Charlie', age: 35 },
// //   ];

// //   const namesBox1 = persons.forEach((box)=>{console.log(box.userName)})
// //   console.log(namesBox1);

// //   const namesBox2 = persons.map((box)=>{console.log(box.userName)})
// //   console.log(namesBox2);
// //   const namesBox2 = persons.map((box)=>box.userName)
// //   console.log(namesBox2);
// //   const namesBox3 = persons.map((box)=>box.age)
// //   console.log(namesBox3);


// // const numbers1 = [10, 22, 33, 44, 555]

// // // const evenNumbers = numbers1.filter((num) => (num % 2) === 0)
// // const evenNumbers = numbers1.filter((num) => (num % 2) !== 0)
// // console.log(evenNumbers);

// // const numbers1 = [0, 10, , 33, null, 555, , undefined, NaN]
// // // const numbers1 = [ 10, , 33, , 555,]
// // // const result = numbers1.filter(()=> true)
// // // const result = numbers1.filter((num) => num)
// // const result = numbers1.filter((num) => num !== undefined && num !== null)
// // console.log(result);




// // ФІЛЬТРИ З МАСИВ ОБ'ЄКТІВ

// // const persons = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 },
// //     { name: 'Diana', age: 28 }
// // ];
// // const personsOver30 = persons.filter(person => person.age >= 30);
// // console.log(personsOver30);
// // const persons = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 },
// //     { name: 'Diana', age: 28 }
// // ];
// // // const personsOver30 =
// // //     persons
// // //         .filter(person => person.age >= 30)
// // //         .map(person => person.name)


// // console.log(personsOver30);

// // const personsOver30 = persons.filter(person => person.age >= 30)
// // console.log(personsOver30);

// // const namesPersonOver30 = personsOver30.map(person =>person.name)
// // console.log(namesPersonOver30);


// // find та findIndex
// // const persons = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 }
// //   ];

// //   const personOver30 = persons.find(person => person.age >= 30);
// //   console.log(personOver30);
// // const persons = [
// //     { name: 'Alice', age: 25 },
// //     // { name: 'Bob', age: 30 },
// //     // { name: 'Charlie', age: 35 }
// //   ];

// //   const personOver30 = persons.findIndex(person => person.age >= 30);
// //   console.log(personOver30);


// // const numbers1 = [10, 22, 33, 44, -555]

// // const isAllPositive = numbers1.every(num => num > 0)
// // console.log(isAllPositive);

// // const numbers1 = [10, 22, 33, 44, -555]
// // const numbers1 = [10, 22, 33,, 44, 34]

// // const isOneOfAllNegative = numbers1.some(num => {
// //     console.log(num);
// //     return num<0

// // })
// // console.log(isOneOfAllNegative);

// // const numbers1 = [10, 25, 30, 20, 15]
// // const sum = numbers1.reduce((accumulator, currentValue)=> accumulator+currentValue)
// // debuggerconsole.log(sum);

// // const numbers1 = [10, 25, 30, 20, 15]
// // const sum = numbers1.reduce((accumulator, currentValue) => {
// //     debugger
// //     return accumulator + currentValue
// // })
// // debuggerconsole.log(sum);

// // const numbers1 = [10, 25, 30, 20, 15]
// // const sum = numbers1.reduce((accumulator, currentValue)=> accumulator+currentValue, 1000)
// // console.log(sum);


// // REDUCE
// // const numbers1 = [10, 25, 30, 20, 15]
// // const sum = numbers1.reduce((accumulator, currentValue) => {
// //     // debugger
// //     return accumulator + currentValue
// // }, 1000)
// // console.log(sum);

// // const numbers1 = [10, 25, 30, 20, 15]
// // let testCondition = 0
// // const sum = numbers1.reduce((accumulator, currentValue, i) => {

// //     // debugger
// //     // testCondition = !(i % 2)
// //     // testCondition = !(i % 2)

// //     // if (!(i % 2) === 0) {
// //     //     return accumulator + currentValue
// //     // } else {
// //     //     return accumulator
// //     // }

// //     // if (!(i % 2)) {
// //     //     return accumulator + currentValue
// //     // } else {
// //     //     return accumulator
// //     // }
// //     if (i % 2) {
// //         return accumulator
// //     } else {
// //         return accumulator + currentValue
// //     }

// // }, 1000)
// // console.log(sum);

// // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

// // const countFruits = fruits.reduce((acc, curr)=>{
// //     // debugger
// //     console.log(acc, curr)
// //     return acc
// // },{})
// // console.log(countFruits);

// // const countFruits = fruits.reduce((acc, curr)=>{
// //     // debugger
// //     acc.counter += 1
// //     console.log(acc, curr)
// //     return acc
// // },{counter:0})
// // console.log(countFruits);

// // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple'];

// // const countFruits = fruits.reduce((acc, curr) => {
// //     // debugger
// //     console.log(acc, curr)
// //     // acc[curr] = 1
// //     // acc[curr] += 1
// //     // debugger
// //     acc[curr] = (acc[curr] || 0) + 1

// //     // acc[curr] = (acc[curr] !== undefined ? acc[curr] : 0) + 1

// //     // if (!acc[curr] ) {
// //     //     acc[curr] = 1
// //     // } else {
// //     //     acc[curr] += 1
// //     // }
// //     // if (acc[curr] === undefined ) {
// //     //     acc[curr] = 1
// //     // } else {
// //     //     acc[curr] += 1
// //     // }

// //     return acc
// // }, {})
// // console.log(countFruits);

// // const fr = {
// //     apple: 1,
// //     banana: 1,
// //     orange: 1,
// // }


// // console.log(fr);
// // fr.apple = 1
// // console.log(fr);
// // fr.apple = 100
// // console.log(fr);

// // const acc = {
// // }

// // let curr = 'apple'
// // acc[curr] = 1
// // console.log(acc);

// // const acc = {
// // }
// // console.log(acc.apple);


// // 0 null undefined -0 NaN '' false

// // const resultOr = undefined || 0
// // console.log(resultOr);
// // const resultOr = undefined || 1000
// // console.log(resultOr);
// // const resultOr = 1000 || undefined  
// // console.log(resultOr);
// // const resultOr = 1 || 10 
// // console.log(resultOr);


// // const numbers = [12, 45, 7, 99, 34];
// // // console.log(Math.max(2,5,77));
// // const largestNumber = numbers.reduce((acc, curr)=>{
// //     console.log(`${acc} > ${curr}`);

// //     return Math.max(acc, curr)
// // })
// // console.log(largestNumber);



// const arrayOfObjects = [
//     { key: 'name', value: 'Alice' },
//     { key: 'age', value: 25 },
//     { key: 'job', value: 'developer' }
// ];

// //   const mergeObject1 = arrayOfObjects.reduce((acc,curr)=>{
// //     console.log(acc, curr);
// //     // acc[key]

// //   },{})
// // console.log('--');

// const mergeObject2 = arrayOfObjects.reduce((acc, { key, value }) => {
//     console.log("Початкові дані на ітерації:");
//     console.log(acc, key, value);
//     acc[key] = value
//     console.log("Повертаємо в ACC:");
//     console.log(acc);

//     return acc
// }, {})
// console.log(mergeObject2);


// const words = ['world', 'Hello'];
// const sentence = words.reduceRight((acc, curr) => {
//     // console.log(acc);
//     // console.log(curr);

//     return acc + ' ' + curr
// }, '')
// console.log(sentence);

// const numbers = [10, 20, 30, 40, 50];
// const reversed = numbers.reduceRight((acc, curr, i) => {
// console.log(`поточне значення acc`, acc);
// console.log(`поточне значення curr ${curr}`);
// console.log(`поточне значення індекса ${i}`);
// console.log('--');

//     // acc[numbers.length - i - 1] = curr
//     acc[numbers.length - (i + 1)] = curr
//     return acc
// }, [])
// console.log(reversed);

// const inputString = "racecar";

// const letters = inputString.split('')
// console.log(letters);

// const backward = letters.reduceRight((acc, curr) => acc + curr, '')
// console.log(backward);
// const isPalindrome = inputString === backward
// console.log(isPalindrome);


// const multiplier = {
//     factor: 2,
//     multiply(item) {
//         return item * this.factor
//     }
//     // multiply(item) {
//     //     return item * this.factor
//     // }
//     // multiply(item) {
//     //     return item * this.factor
//     // }
// }
// const result1 = multiplier.multiply(4)
// console.log(result1);

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result2 = numbers1.map(multiplier.multiply, multiplier)
// console.log(result2);

// function multiply(item) {
//     return item * 2
// }
// const res = multiply(4)
// console.log(res);

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result3 = numbers1.map(multiply)
// // console.log(result3);


// PUSH, POP, SHIFT, UNSHIFT

// push
// const fruits = ['apple', 'banana'];
// const fruits = ['apple', 'banana', , ,];
// fruits.length = 4
// // console.log(fruits);

// // fruits.push('mango')
// fruits.push('mango', 'plum')
// // // const newLengthArray = fruits.push('mango', 'plum')
// console.log(fruits);
// // console.log(newLengthArray);

// // pop
// // fruits.pop()
// const deletedElement = fruits.pop()

// console.log(fruits);
// console.log(deletedElement);

// // unshift
// // fruits.unshift(deletedElement)
// fruits.unshift(deletedElement, 'orange')
// console.log(fruits);

// // shift
// // fruits.shift()
// const exctratedElementValue = fruits.shift()
// console.log(fruits);
// console.log(exctratedElementValue);


// const nestedArray = [
//     1,
//     [2, 3],
//     [4,
//         [5]
//     ]
// ];
// // const flattenedArray = nestedArray.flat();
// // const flattenedArray = nestedArray.flat().flat();
// const flattenedArray = nestedArray.flat(2);
// console.log("Приклад 1: Однорівневе 'випрямлення'");
// console.log(flattenedArray); 
// const nestedArray = [
//     1,
//     [2, 3],
//     [,
//         [5]
//     ]
// ];
// // const flattenedArray = nestedArray.flat();
// // const flattenedArray = nestedArray.flat().flat();
// const flattenedArray = nestedArray.flat(2);
// console.log("Приклад 1: Однорівневе 'випрямлення'");
// console.log(flattenedArray); 

// const nestedArray = [
//         1,
//         11,
//         22
//     ];

//     // const doubleNumbers = nestedArray.map(item=>[item, item])
//     const doubleNumbers = nestedArray.flatMap(item=>[item, item])
//     console.log(doubleNumbers);


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // Приклад 1: Об'єднання двох масивів
// const combined1 = array1.concat(array2);
// // console.log("Приклад 1: Об'єднання двох масивів");
// // console.log(combined1);
// // const combined11 = [...array1,...array2]
// // console.log(combined11);


// // Приклад 2: Об'єднання масиву з окремими елементами
// const combined2 = array1.concat(44, 55);
// // console.log("\nПриклад 2: Об'єднання масиву з окремими елементами");
// // console.log(combined2);
// // const combined22 = [...array1,44,55]
// // console.log(combined22);

// // Приклад 3: Об'єднання масивів і окремих елементів
// const combined3 = array1.concat(array2, 6, 7);
// console.log("\nПриклад 3: Об'єднання масивів і окремих елементів");
// console.log(combined3);
// const combined33 = [...array1, ...array2, 6, 7]
// console.log(combined33);

// console.log(array1);


// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// console.log(fruits[-1]);

// const selectedFruits1 = fruits.slice(1, 4);
// console.log("Приклад 1: Вибір елементів з індексу 1 до 4 (не включно)");
// console.log(selectedFruits1);

// const selectedFruits2 = fruits.slice(-2);
// console.log("\nПриклад 2: Вибір елементів з кінця масиву");
// console.log(selectedFruits2); 


// console.log(fruits);

// Видалення
// let nums = [11, 22, 33, 44, 55, 234, 456];
// // const removed1 = nums.splice(1);
// // const removed1 = nums.splice(2);
// const removed1 = nums.splice(3, 1);
// console.log("Приклад 1: Видалення елементів");
// console.log("Видалені елементи:", removed1);
// console.log("Оновлений масив:", nums);

// let nums = [11, 22, 33, 44, 55, 234, 456];
// // Приклад 2: Додавання елементів
// nums.splice(5,0,'rrr','ddd')
// console.log(nums);


// Приклад 3: Заміна елементів
// let nums = [11, 22, 33, 44, 55, 234, 456];
// // nums.splice(3,1,8888)
// // nums.splice(3,2,8888)
// // nums.splice(3,2,8888,66666,77777)
// nums.splice(-1,1)
// console.log(nums);

// let nums = [11, 22, 33, 44, 55, 234, 456];
// // nums.fill(0)
// // console.log(nums);
// // nums.fill(0, 2)
// // console.log(nums);
// // nums.fill(0, 2,4)
// // nums.fill(0, 2, 5)
// // nums.fill(0, 2, 3)
// nums.fill(0, -5, -2)
// console.log(nums);

let str = ['zero', 'first', 'second', 'third', 'fourth', 'fifth']
console.log(str);

// str.copyWithin(0)
// str.copyWithin(1)
// ['zero', 'first', 'second', 'third', 'fourth', 'fifth']
//          ['zero', 'first', 'second', 'third', 'fourth', 'fifth']
// str.copyWithin(1,1)
// ['zero', 'first', 'second', 'third', 'fourth', 'fifth']
//          ['first', 'second', 'third', 'fourth', 'fifth]
// str.copyWithin(1,3)
// ['zero', 'first', 'second', 'third', 'fourth', 'fifth']
//          'third', 'fourth', 'fifth']
str.copyWithin(1,3,4)
// ['zero', 'first', 'second', 'third', 'fourth', 'fifth']
//          ['third']
console.log(str);


// ПРИКЛАДИ copyWithin
