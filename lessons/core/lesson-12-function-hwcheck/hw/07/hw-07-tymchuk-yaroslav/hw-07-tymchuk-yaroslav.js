// /**
//  * Завдання №1
//  * Один з серіалів, знятих по улюбленій книзі Стівена Кінга "11.22.63"
//  * Використовується конкатенація за допомогою "+"
//  */ 

// let film = "11.22.63";
// let genre = "наукова фантастика";
// let year = "2016";

// let message = "Міні-серіал жанру" + " " + genre + ", " + "який вийшов на екрани у " + year + " " + "році, " + "називається" + " " + film + ".";
// // Щоб я ще раз таким чином написав? Та ну!
// console.log(message);


// /**
//  * Завдання №1
//  * Ще один серіал
//  * Використовуються "` ${}`" для формування рядка
//  */


// let film2 = "Occupied";
// let genre2 = "політичний серіал";
// let year2 = "2015";

// let message2 = `Одним з хороших, на мою думку, серіалів є норвезький "${film2}". Він має жанр "${genre2}". Його прем'єра відбулась у ${year2} році.`
// //  Набагато легше формувати рядки таким способом.
// console.log(message2);


// /**
//  * Завдання №2
//  * 
//  */

// let message3 = '\nКлади на місце "інструмент",\nЗнайдеш його в "любий" момент.'
// console.log(message3);


/**
 * Завдання №3
 * 
 */

let verse = "Світло кінця тунелю, а за спиною лише темрява світло";
let sample = "світло";
let lightPositionStart = verse.toLowerCase().indexOf(sample);
let lightPositionEnd = verse.toLowerCase().lastIndexOf(sample);

let message4 = (lightPositionStart !== -1)?`Слово "${sample}" знаходиться  в реченні, починаючи з індексу [${lightPositionStart}]`:`Слова ${sample} немає в реченні`;
let message5 = (lightPositionStart !== -1) && (lightPositionEnd > lightPositionStart)? `Слово "${sample}" також знаходиться в кінці речення, починаючи з індексу [${lightPositionEnd}].`:``;
let message6 = `${message4}. ${message5}`
console.log(message6);


/**
 * Завдання №4
 * 
 */

// let phrase = "Сонце світить яскраво";
// let newPhrase = phrase.toLowerCase().replace("сонце", "Місяць");
// console.log(newPhrase);



