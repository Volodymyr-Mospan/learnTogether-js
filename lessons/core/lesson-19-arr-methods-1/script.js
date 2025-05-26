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

const numbers1 = [0, 10, , 33, null, 555, , undefined, NaN]
// const numbers1 = [ 10, , 33, , 555,]
// const result = numbers1.filter(()=> true)
// const result = numbers1.filter((num) => num)
const result = numbers1.filter((num) => num !== undefined && num !== null)
console.log(result);


// ФІЛЬТРИ З МАСИВ ОБ'ЄКТІВ

