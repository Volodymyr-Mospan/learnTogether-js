let film = 'Дюна';
let genre = 'фантастика';
let year = '2021';
let message = film+' '+ genre+' '+ year;
 console.log(message);

let expression = 'Те, що нас не \"вбиває\", робить нас \"сильнішими\" \n\t- говорив Фрідріх Ніцше.';
console.log(expression);

let verse = "Світло кінця тунелю, а за спиною лише темрява";
let light = verse.indexOf('cвітло');
let dark = verse.indexOf('тьма');

console.log(`Позиція слова світло: ${light}`);
console.log(`Позиція слова тьма: ${dark}`);

let start = verse.startsWith("Світло");
let end = verse.endsWith("Світло");

console.log(`Починається зі слова \"Світло\": ${start}`);
console.log(`Закінчується зі слова \"Світло\": ${end}`);

let phrase = "Сонце світить яскраво";
let lowerPhase = phrase.toLowerCase();
let update = lowerPhase.replace("сонце", "місяць");
console.log(update);
