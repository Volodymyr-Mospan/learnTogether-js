// let test = "My Name";
// let test;
// console.log(test);
// console.log(test.toLowerCase());

// let element = document.getElementById('text')
// console.log(element);
// element.src = './pic.jpeg'

// Рядки створюються за допомогою одинарних ('), подвійних (") або зворотних (`) лапок. 
// let string1 = 'Це рядок в одинарних лапках';
// let string2 = "Це рядок в подвійних лапках";
// console.log(string2);
// let string3 = `Це рядок в зворотних лапках`;

// // let string4 = ""Це рядок в подвійних лапках Це рядок в подвійних лапках Це рядок в подвійних лапках"";
// let string4 = '"Це рядок в подвійних лапках"';
// console.log(string4);

// let string5 = 'кав"ярня'; 
// let string6 = "'кав\"ярня'"; 
// let string7 = "100.02"; 
// let string8 = 'name="test"'; 
// let string9 = '<a href="#">test link</a>';


// let multiLineString = `     Це рядок,
// що розтягується на кілька рядків
// за допомогою зворотних лапок.`
// console.log(multiLineString);

// let multiLineString = "Це рядок,
// що розтягується на кілька рядків
// за допомогою зворотних лапок."
// let multiLineString = 'Це рядок,
// що розтягується на кілька рядків
// за допомогою зворотних лапок.'

// let multiLineString = 'Це рядок,\
// що розтягується на кілька рядків за допомогою зворотних лапок.'
// console.log(multiLineString);

// let multiLineString = "Це рядок,\nщо розтягується на кілька рядків\nза допомогою зворотних лапок."
// console.log(multiLineString);
// let multiLineString = "Це рядок,\n\tщо розтягується на кілька рядків\n\t\tза допомогою зворотних лапок."
// console.log(multiLineString);

// console.log('\\');
// console.log('\'\'');
// console.log("\"\"");
// console.log('\'допомогою зворотних лапок\'');
// console.log("\"допомогою зворотних лапок\"");

// console.log("еее \"test\" іваіваіва");
// console.log('дизайнерська кав\'ярня у Львові');

// let testMessage = +prompt('Введіть ваш вік числом','19')
// // let testMessage = +prompt('Введіть ваш вік числом','19')
// console.log(testMessage);
// console.log(typeof testMessage);

// За допомогою оператора +:
// var string1 = "Hello, ";
// var string2 = "World!";
// var result = string1 + string2;
// console.log(result); // "Hello, World!"

// // За допомогою методу concat():
// var string1 = "Hello, ";
// var string2 = "World!";
// var result = string1.concat(string2);
// console.log(result); // "Hello, World!"

// Шаблонні рядки
// var string1 = "Hello, ";
// var string2 = "World!";
// var string1 = "Hello,";
// var string2 = "World!";
// var result = `${string1} ${string2}`; // ${змінну або вираз}
// console.log(result);


// const firstName = 'Ivan'
// const yearBorn = 1978
// // let resultStr = `My name ${firstName} and i am ${2024-yearBorn}`
// console.log(`My name ${firstName} and i am ${2024-yearBorn}`);
// document.body.textContent = `My name ${firstName} and i am ${2024-yearBorn}`

// За допомогою оператора +:
// var string1 = "Hello,";
// var string2 = "World!";
// var result = string1 + " " + string2;
// console.log(result); // "Hello, World!"




// var Hello = 4
// var World = 0

// var message = Hello, World,!;
// console.log(message);
// console.log(message.length); // 13

// let x, y, v
// let x1 = 3, y1 = 4, v1 = 4


// var message = "Hello, World!";
// var message = "     Hello, World!";
// console.log(message.length); // 13 18

// let stringTest = ""   // пустий рядок  ''
// console.log(stringTest.length);
// // let stringTest = " "   // рядок з 1 символом (прогалик)
// if (stringTest.length === 0) {
//     console.log('Рядок пустий');
// } else {
//     console.log('Рядок непустий');
// }

// var stringTest = "Hello, World!";
// // for (let i = 0; i < stringTest.length; i++) {
// //     console.log(stringTest[i]);

// // }

// // console.log(stringTest[2]);
// console.log(stringTest[3]);
// console.log(typeof stringTest[3]);

// var string = "Hello, World!";
// for (var i = 0; i < string.length; i++) {
//     // console.log("Символ на позиції " + i + ": " + string[i]);
//    const message = `Символ на позиції ${i}: ${string[i]}`
//    console.log(message);
// }

// console.log(typeof Number("123"));
// console.log(typeof Boolean(123));
// console.log(typeof String(123));
// // console.log(String(123));

// console.log((123).toString());
// let num = new Number(123)
// console.log(num);
// let numToStr = num.toString()
// console.log(numToStr);

// console.log(typeof new Number("123"));
// console.log(typeof new Boolean(123));
// console.log(typeof new String(123));

// console.log(new Number("123"));
// console.log(new Boolean(123));
// console.log(new String(123));

// console.log(Boolean(-1));
// console.log(-(+1));


let s = "Hello, world"

// частина рядка
// console.log(s.substring(1,4)); // ell
// console.log(s.substring(0,3)); // Hel

// console.log(s.slice(1,4)); // ell
// console.log(s.slice(-3)); // rld
// console.log(s.slice(-5)); // world

// console.log(s.split(", ")); //  ['Hello', 'world']
// console.log(s.split("")); //  ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']
// console.log(s.split(" ")); //  ['Hello,', 'world']
// console.log(s.split("o")); //  ['Hell', ', w', 'rld']

// console.log(s);
// console.log(s == ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']);
// console.log(typeof ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']);
// console.log(['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']);
// console.log(new String(s));

// let s = "Hello, world"
// пошук рядка
// console.log(s.indexOf("l")); // 2 індекс символа в рядку - перше входження
// console.log(s.indexOf("wor")); // 7 індекс першого символа підрядка в рядку
// console.log(s.indexOf("o", 6)); // 8 індекс символа в рядку, пошук тільки з 6 індекса
// console.log(s.indexOf('55')); // -1 відсутність підрядка
// console.log(s.lastIndexOf('l')); // 10 пошук з кінця рядка
// console.log(s.lastIndexOf('55')); // -1 відсутність підрядка

// let s = "Hello, world"
// Boolean searching
// console.log(s.startsWith('Hello')); // true
// console.log(s.endsWith('Hello')); // false
// console.log(s.endsWith('rld')); //  true
// console.log(s.includes(' ')); //  true
// console.log(s.includes('ll')); //  true
// console.log(s.includes('  ')); //  false

// let s = "Hello, world"
// створення модифікації початкового рядка
// console.log(s.replace("llo", 'ya')); // Heya, world
// console.log(s.toLowerCase()); // hello, world
// console.log(s.toUpperCase()); // HELLO, WORLD

// let s = "Hello, world"
// робота з конкретними символами та їх кодами
// console.log(s.charAt(0)); // H
// console.log(s[0]); // H
// console.log(s.length);
// console.log(s.charAt(11)); // d
// console.log(s.charAt(s.length-1)); // d

// console.log(s.charCodeAt(0)); // код 72
// console.log(s.charCodeAt(6)); // код 32

// доповнення рядка
// console.log("x".padStart(3));
// console.log("x".length);
// console.log("x".padStart(3).length);

// console.log("xyz".padStart(3));

// console.log("x".padEnd(3));
// console.log("x".padEnd(3).length);

// відсікаємо прогалик
// console.log('     test  '.length);
// console.log('     test  '.trim());
// console.log('     test  '.trim().length);

// console.log('     test  '.length);
// console.log('     test  '.trimStart());
// console.log('     test  '.trimStart().length);

// console.log('     test  '.length);
// console.log('     test  '.trimEnd());
// console.log('     test  '.trimEnd().length);


// console.log("<>".repeat(5));

console.log('     test  '.trim().toUpperCase())
// console.log('     test  '.)