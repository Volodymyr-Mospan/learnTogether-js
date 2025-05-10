/* {
 ключ:значення будь-якого типу,
 ключ:значення будь-якого типу,
 ключ:значення будь-якого типу,
 ключ:значення будь-якого типу,
 ключ:значення будь-якого типу(навіть функцією),
 метод:функція,
}
 */

// const testObj = {}
// console.log(testObj);

// const testObj = {
//   userName:"",
//   userAge:0
// }
// console.log(testObj);

// const testObj = {
//   userName:"Ivan",
//   userAge: 34
// }
// console.log(testObj);

// const testObj = {
//   userName:"",
//   userAge:0
// }
// testObj.userAge = 35 // можна замінити значення ключів в об'єкті який оголошено КОНСТАНТОЮ
// testObj.userName = "Agata" // можна замінити значення ключів в об'єкті який оголошено КОНСТАНТОЮ
// console.log(testObj);
// // testObj = {} // TypeError: Assignment to constant variable.

// // let testObj2 = {test:123}
// // testObj2 = Boolean(testObj2)

// console.log(testObj.userAge);
// console.log(testObj.userName);

// const student = {
//   name: 'Іван',
//   age: 20,
//   city: 'Київ',
//   sayHello: function(){
//       // return `Привіт, мене звати ${this.name}!`;
//       return `Привіт, мене звати ${student.name}!`;
//   }
// };

// console.log(student.age);
// console.log(student.city);
// console.log(student.name);
// console.log(student.sayHello);
// console.log(student.sayHello());
// const message = student.sayHello()
// console.log(message);

// console.log(sayHello()); // ReferenceError: sayHello is not defined

// console.log('Ключі об\'єкта:', Object.keys(student));
// console.log('Значення об\'єкта:', Object.values(student));
// console.log('Записи об\'єкта:', Object.entries(student));


// const student = {
//   name: 'Іван',
//   age: 20,
//   city: 'Київ',
//   sayHello: function(){
//       return `Привіт, мене звати ${this.name}!`;
//   }
// };

// console.log(student);


// console.log('Ключі об\'єкта:', Object.keys(student));

// for (const key in student) {
//   console.log(key);
// }
// for (const boooo in student) {
//   console.log(boooo);
// }

// const testArr = [елементи через кому будь-якогог типу даних, також функції]
// const testArr = []
// const fruits = ['яблуко', 'банан', 'апельсин', 'груша'];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// let dieta = 'Моя дієта: '
// for (const fruit  of fruits) {
//   // console.log(fruit);
//   if (fruit === "банан") {
//     console.log("фу яка гидота");
//     continue;
//   }
//   dieta = dieta + fruit + ", "
//   console.log(dieta);

// }
// console.log(dieta);


// for (let i = 0; i < fruits.length/2; i++) {
//   console.log(fruits[i]);
// }


// const testArr = []
// const fruits = ['яблуко', 'банан', 'апельсин', 'груша'];
// console.log(fruits);

// console.log('\nМасив з\'єднаний в рядок:', fruits.join(', '));
// console.log(fruits.join(', '));
// console.log(fruits.join('-'));
// console.log(fruits.join(' * '));

//  let dieta = 'Моя дієта: '
// const upFruits = []
// fruits.forEach((fruit, j) => {
//   // console.log(fruit)
//   // dieta = dieta + fruit + ", "
//   //   console.log(dieta);
//   console.log(fruit.toUpperCase())
//   upFruits[j] = fruit.toUpperCase()
// })
// console.log(fruits);
// console.log(upFruits);


// const books = [{},{},{},{},{},]

// const books = [
//   {
//     title:'Кобзар',
//     author: 'Тарас Шевченко',
//     year: 1840
//   },
//   {
//     title:'Лісова пісня',
//     author: 'Леся Українка',
//     year: 1911
//   },
//   {
//     title:'Тіні забутих предків',
//     author: 'Михайло Коцюбинський',
//     year: 1911
//   }
// ];
// books.forEach((book)=>{
//   // console.log(book);
//   console.log(book.author);
//   console.log(book.title);
//   console.log(book.year);
//   console.log(`Книга "${book.title}" написана автором ${book.author} у ${book.year} році`);
// })