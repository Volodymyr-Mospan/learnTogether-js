// 1:
let film = "Інтерстеллар";
let genre = "наукова фантастика";
let year = 2014;

let message = `улюблений фільм: ${film}\n його жанр: ${genre}\n рік випуску: ${year}`;
console.log(message);



// 2:
const quote = 'Краще \'запалити\' свічку,\nніж \'проклинати\' темряву';
console.log(quote);


//3:
let verse = "Світло кінця тунелю, а за спиною лише темрява";

// Визначте, на якій позиції знаходиться слово "світло" та "тьма" у вірші
console.log(verse.indexOf('Світло'));
console.log(verse.indexOf('тьма'));
// перевірте, чи зустрічається слово "світло" на початку чи в кінці рядка
console.log(verse.startsWith('Світло'));
console.log(verse.endsWith('Світло'));



//4:
let phrase = "Сонце свіТИть ясКРаво";

let phraseLowerCase = phrase.toLowerCase();
console.log(phraseLowerCase);

let phraseReplace = phraseLowerCase.replace('сонце', 'місяць');
console.log(phraseReplace);




