// 1-Конкатенація рядків
const movie = 'Back to the Future';
const genre = 'comedy';
const year = 1985;
const directedBy = 'Robert Zemeckis';
const writer = ['Robert Zemeckis', 'Bob Gale'];

let message = `"${movie}" is a ${year} American science fiction film directed by ${directedBy} and written by ${writer[0]} and ${writer[1]}`;
console.log(message);

message = '"' + movie + '"' + ' is a ' + year + ' American science fiction film directed by '.concat(directedBy, ' and written by ', writer[0], ' and ', writer[1]);
console.log(message);


// 2-Робота з екрануванням символів
message = 'Success is not a "destination", it\'s a \'journey\'.\n\tNever stop dreaming.'
console.log(message);

// 3-Пошук у рядку
let verse = "Світло кінця тунелю, а за спиною лише темрява";
const searchWordOne = 'світло';
const searchWordTwo = 'тьма';

verse = verse.toLowerCase();
console.log(verse.indexOf(searchWordOne));
console.log(verse.indexOf(searchWordTwo));

console.log(`The string starts with the "${searchWordOne}" word - ${verse.startsWith(searchWordOne)}`);
сonsole.log(`The string ends with the "${searchWordOne}" word - ${verse.endsWith(searchWordOne)}`);

console.lоg(verse);

// 4-Зміна регістру та заміна частини рядка
let phrase = "Сонце світить яскраво";

phrase = phrase.toLowerCase();
console.log(phrase);

const pattern = 'сонце';
const replacement = 'місяць';
phrase = phrase.replace(pattern, replacement);
console.log(phrase);



