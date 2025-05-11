console.log("Конкатенація рядків через +");
const film = "The Big Lebowski";
const genre = "Comedy";
const year = "1998";
console.log(film + " " + genre + " " + year);

console.log("\n");

console.log("Конкатенація рядків через шаблоні рядки");
console.log(`Назва ${film} Жанр ${genre} Рік ${year}`);
console.log("\n");
console.log("Екрануванням символів");

let phrase = "`Чи бути,`\n\t \"чи не бути?\" —\n 'ось питання'.";
console.log(phrase);
console.log("\n");

let verse = "Світло кінця тунелю, а за спиною лише темрява";
console.log('Пошук у рядку "' + verse + '"');
const searchString1 = "Світло";
const searchString2 = "тьма";
console.log(
  'Позиція слова "' + searchString1 + '" : ' + verse.indexOf(searchString1)
);
console.log(
  'Позиція слова "' + searchString2 + '": ' + verse.indexOf(searchString2)
);
console.log("\n");

console.log("Чи починаеться з строки ");
console.log(
  'Чи починаеться словом "' +
    searchString1 +
    '" : ' +
    verse.startsWith(searchString1)
);
console.log(
  'Чи кінчаеться словом "' +
    searchString1 +
    '" : ' +
    verse.endsWith(searchString1)
);

console.log("\n");

console.log("Зміна регістру та заміна частини рядка");
let sentence = "Сонце світить яскраво";
console.log(sentence.toLowerCase().replace("сонце", "місяць"));
// console.log(sentence.);
